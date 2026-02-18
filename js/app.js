// Simple single-file diary app using localStorage with fallback
const qs = s => document.querySelector(s)
const qsa = s => Array.from(document.querySelectorAll(s))

const entriesKey = 'diaryEntries_v1'
let entries = []
let currentId = null
let useLocalStorage = true

// Test localStorage availability
try {
  localStorage.setItem('test', 'test')
  localStorage.removeItem('test')
} catch(e) {
  console.warn('localStorage tidak tersedia, menggunakan in-memory storage')
  useLocalStorage = false
}

// Elements
const entriesList = qs('#entriesList')
const newEntryBtn = qs('#newEntryBtn')
const entryTitle = qs('#entryTitle')
const entryDate = qs('#entryDate')
const entryContent = qs('#entryContent')
const audioUrl = qs('#audioUrl')
const audioFile = qs('#audioFile')
const audioPlayer = qs('#audioPlayer')
const clearAudioFile = qs('#clearAudioFile')
const audioUploadBtn = qs('#audioUploadBtn')
const audioToggleBtn = qs('#audioToggleBtn')
const saveBtn = qs('#saveBtn')
const deleteBtn = qs('#deleteBtn')

function load(){
  try {
    if(useLocalStorage) {
      entries = JSON.parse(localStorage.getItem(entriesKey)) || []
    }
  } catch(e) {
    console.error('Error loading from storage:', e)
    entries = []
  }
  renderList()
  if(entries.length) openEntry(entries[0].id)
}

function saveToStorage(){
  try {
    if(useLocalStorage) {
      localStorage.setItem(entriesKey, JSON.stringify(entries))
    }
  } catch(e) {
    console.error('Error saving to storage:', e)
  }
}

function renderList(){
  entriesList.innerHTML = ''
  entries.slice().reverse().forEach(e => {
    const li = document.createElement('li')
    li.textContent = `${e.date || ''} — ${e.title || '(Tanpa judul)'}`
    li.dataset.id = e.id
    if(e.id===currentId) li.classList.add('active')
    li.addEventListener('click', ()=>openEntry(e.id))
    entriesList.appendChild(li)
  })
}

function openEntry(id){
  const e = entries.find(x=>x.id===id)
  if(!e) return
  currentId = e.id
  entryTitle.value = e.title
  entryDate.value = e.date || ''
  entryContent.value = e.content || ''
  if(e.audio){ audioPlayer.src = e.audio; audioPlayer.style.display='block' } else { audioPlayer.src=''; audioPlayer.style.display='none' }
  audioUrl.value = e.audioUrl || ''
  renderList()
}

function newEntry(){
  const id = String(Date.now())
  const date = new Date().toISOString().slice(0,10)
  const e = {id,title:'',date,content:'',audio:null,audioUrl:''}
  entries.push(e)
  saveToStorage()
  openEntry(id)
}

function saveEntry(){
  if(!currentId) return alert('Pilih atau buat halaman terlebih dahulu')
  const idx = entries.findIndex(x=>x.id===currentId)
  if(idx===-1) return
  entries[idx].title = entryTitle.value
  entries[idx].date = entryDate.value
  entries[idx].content = entryContent.value
  entries[idx].audioUrl = audioUrl.value
  // prefer file upload (audioPlayer.src may be data URL)
  entries[idx].audio = audioPlayer.src || null
  saveToStorage()
  renderList()
  alert('Tersimpan')
}

function deleteEntry(){
  if(!currentId) return
  if(!confirm('Hapus halaman ini?')) return
  entries = entries.filter(x=>x.id!==currentId)
  saveToStorage()
  currentId = entries.length? entries[0].id : null
  if(currentId) openEntry(currentId) else { entryTitle.value='';entryDate.value='';entryContent.value='';audioPlayer.src='';audioPlayer.style.display='none';audioUrl.value=''; }
  renderList()
}

// audio file -> data URL
audioFile.addEventListener('change', ()=>{
  const f = audioFile.files[0]
  if(!f) return
  const reader = new FileReader()
  reader.onload = ()=>{
    audioPlayer.src = reader.result
    audioPlayer.style.display = 'block'
  }
  reader.readAsDataURL(f)
})

clearAudioFile.addEventListener('click', ()=>{
  audioFile.value = ''
  audioPlayer.src = ''
  audioPlayer.style.display='none'
  audioUrl.value = ''
})

audioUrl.addEventListener('change', ()=>{
  const v = audioUrl.value.trim()
  if(!v){ audioPlayer.src=''; audioPlayer.style.display='none'; return }
  audioPlayer.src = v
  audioPlayer.style.display = 'block'
})

// upload button opens file chooser
if(audioUploadBtn){
  audioUploadBtn.addEventListener('click', ()=>{ if(audioFile) audioFile.click() })
}

// play/pause toggle
if(audioToggleBtn && audioPlayer){
  const icon = document.getElementById('audioToggleIcon')
  function setPlay(){ if(!icon) return; icon.innerHTML = '<path d="M5 3v18l15-9L5 3z" fill="currentColor"/>' }
  function setPause(){ if(!icon) return; icon.innerHTML = '<path d="M6 5h4v14H6zM14 5h4v14h-4z" fill="currentColor"/>' }
  audioToggleBtn.addEventListener('click', ()=>{
    if(audioPlayer.paused) audioPlayer.play().catch(()=>{})
    else audioPlayer.pause()
  })
  audioPlayer.addEventListener('play', setPause)
  audioPlayer.addEventListener('pause', setPlay)
  // init icon state
  if(audioPlayer.paused) setPlay(); else setPause()
}

newEntryBtn.addEventListener('click', newEntry)
saveBtn.addEventListener('click', saveEntry)
deleteBtn.addEventListener('click', deleteEntry)

// init
load()

/* Neon background particles */
(function(){
  const canvas = document.getElementById('bgCanvas')
  if(!canvas) return
  const ctx = canvas.getContext('2d')
  let W = 0, H = 0
  function resize(){ W = canvas.width = innerWidth; H = canvas.height = innerHeight }
  window.addEventListener('resize', resize)
  resize()

  const colors = ['#00e5ff','#ff00d0','#66fff0','#ff7ae8']
  const parts = []
  const COUNT = Math.max(Math.min(Math.floor((W*H)/30000), 140), 40)

  class P{
    constructor(){ this.reset(true) }
    reset(init){
      this.x = Math.random()*W
      this.y = Math.random()*H
      const dir = Math.random()*Math.PI*2
      const speed = 0.2 + Math.random()*0.6
      this.vx = Math.cos(dir)*speed
      this.vy = Math.sin(dir)*speed
      this.r = 2 + Math.random()*8
      this.c = colors[Math.floor(Math.random()*colors.length)]
      if(!init){ // place at edges sometimes
        if(Math.random()<0.3){ this.x = Math.random()<0.5? -50: W+50 }
        if(Math.random()<0.3){ this.y = Math.random()<0.5? -50: H+50 }
      }
    }
    update(){
      this.x += this.vx
      this.y += this.vy
      if(this.x < -80 || this.x > W+80 || this.y < -80 || this.y > H+80) this.reset(false)
    }
    draw(){
      const grad = ctx.createRadialGradient(this.x,this.y,0,this.x,this.y,this.r*8)
      grad.addColorStop(0, this.c)
      grad.addColorStop(0.18, this.c + '66')
      grad.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = grad
      ctx.fillRect(this.x - this.r*8, this.y - this.r*8, this.r*16, this.r*16)
    }
  }

  function initParticles(){
    parts.length = 0
    const total = Math.max(40, Math.min(120, Math.floor((W*H)/40000)))
    for(let i=0;i<total;i++) parts.push(new P())
  }

  initParticles()

  // slight mouse parallax
  let mx = -9999, my = -9999
  window.addEventListener('mousemove', (e)=>{ mx = e.clientX; my = e.clientY })

  function frame(){
    ctx.clearRect(0,0,W,H)
    ctx.globalCompositeOperation = 'lighter'
    for(const p of parts){
      // gentle reaction to mouse
      if(mx > -1000){
        const dx = (mx - p.x) * 0.0004
        const dy = (my - p.y) * 0.0004
        p.vx += dx
        p.vy += dy
      }
      p.vx *= 0.995; p.vy *= 0.995
      p.update()
      p.draw()
    }
    ctx.globalCompositeOperation = 'source-over'
    requestAnimationFrame(frame)
  }
  frame()
  // recreate on resize for density
  let reInitTimer
  window.addEventListener('resize', ()=>{ clearTimeout(reInitTimer); reInitTimer = setTimeout(()=>{ initParticles() }, 250) })
})()

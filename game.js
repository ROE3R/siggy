(function() {
    'use strict';
    
    // ============================================
    // ⭐⭐⭐ PASTE BASE64 LOGO ANDA DISINI ⭐⭐⭐
    // ============================================
    const LOGO_IMAGE = {
        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAn9QTFRFAAAAWFhYsLCwTU1N7e3t////sbGxQEBA/f39+/v7+Pj4w8PDRERE9/f39fX1/v7+8fHxxMTEV1dX7u7ur6+vUFBQ6urq/Pz8+fn5+vr6tbW1Pj4+s7OzOjo6tra2SkpK4eHh9PT08/Pzt7e35OTk7+/vrq6uOTk58PDwx8fHNDQ09vb2urq6Ozs78vLy6+vrrKysNzc3qKioqqqqNTU14uLip6enLCws4ODgnJycKSkpq6urMTEx3d3d6enp4+Pjpqam3t7eKysrmJiY7OzsioqKkJCQv7+/eHh4ycnJb29vzc3Nd3d30dHRenp60tLSbGxs5eXly8vLdHR0fX19QUFBgICASEhI5ubmi4uL5+fnU1NTz8/PjIyMUlJSSUlJ6OjoLy8vf39/QkJCcnJy39/f19fXLS0t1tbW3NzccXFxdXV1eXl5MzMz29vbRkZG2dnZKioqMDAwzs7O2NjYR0dH1dXVa2tr09PTYGBgQ0NDS0tLcHBwMjIyZ2dnPz8/2traRUVFZGRkwsLCLi4uZmZm1NTUbm5uaGhouLi4xcXFfn5+hoaGhISEg4ODwcHBiIiIgYGBtLS0goKCra2tjo6Oubm5hYWFo6Ojj4+PkZGRsrKyk5OTlpaWvLy8TExMvb29iYmJfHx8oKCgm5ubqampT09PkpKSjY2NWVlZpaWlzMzMnp6eY2NjyMjIu7u7vr6+ODg4xsbGW1tbampqc3NzysrKwMDATk5OUVFRPT09h4eHVVVVVFRUNjY2VlZWoaGhlZWVe3t7bW1tZWVlnZ2dXFxclJSUdnZ20NDQYWFhWlpaPDw8mZmZYmJil5eXXV1dpKSkoqKimpqaX19fwMFQBwAAANV0Uk5TAP//7P///5r/////s///////////////////jf9z/9n/////////bf//Tf//ev///2D//1P//xr//wf/Ov//////FP///////////////////////6D/zf/////////T/y3/pv///yD//////0f/wP8NM///xv////+t4P9A/5P/uf//J///////////////////////////////////5v////////n/////////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',
        loaded: false,
        img: null
    };
    // ============================================
    
    function loadLogoImage(callback) {
        LOGO_IMAGE.img = new Image();
        LOGO_IMAGE.img.onload = function() {
            LOGO_IMAGE.loaded = true;
            callback();
        };
        LOGO_IMAGE.img.onerror = function() {
            console.error('Failed to load logo image');
            callback();
        };
        LOGO_IMAGE.img.src = LOGO_IMAGE.src;
    }
    
    const CONFIG = { gravity: 0.42, jumpStrength: -8.5, baseSpeed: 2.8, maxSpeed: 4.5, gapMin: 145, gapMax: 170, treeSpacing: 220, catSize: 42 };
    
    const INSULTS = [
        { main: "LOSER!", sub: "Even a dead cat flies better!" },
        { main: "PATHETIC!", sub: "The witch laughs at your failure!" },
        { main: "WORTHLESS!", sub: "Siggy will never get home with you!" },
        { main: "FAILURE!", sub: "A snail moves better than you!" },
        { main: "HOPELESS!", sub: "Give up already, mortal!" },
        { main: "WEAK!", sub: "The forest claims another fool!" },
        { main: "DISGRACE!", sub: "Siggy is ashamed of you!" },
        { main: "TERRIBLE!", sub: "The trees weren't even trying!" }
    ];

    let leaderboard = [
        { name: "ShadowMaster", score: 89, id: 1 },
        { name: "CryptoKing", score: 76, id: 2 },
        { name: "NightHunter", score: 64, id: 3 },
        { name: "MoonWalker", score: 58, id: 4 },
        { name: "StarGazer", score: 52, id: 5 },
        { name: "DarkWizard", score: 47, id: 6 },
        { name: "PhantomCat", score: 43, id: 7 },
        { name: "GhostRider", score: 38, id: 8 }
    ];
    
    let currentPlayer = { name: "", bestScore: 0, id: null };
    
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const container = document.getElementById('gameContainer');
    const catPreview = document.getElementById('catPreview');
    const catPreviewCtx = catPreview.getContext('2d');
    const catPreview2 = document.getElementById('catPreview2');
    const catPreview2Ctx = catPreview2.getContext('2d');
    const witchCanvas = document.getElementById('witchCanvas');
    const witchCtx = witchCanvas.getContext('2d');

    const DOM = {
        loadingScreen: document.getElementById('loadingScreen'),
        menuScreen: document.getElementById('menuScreen'),
        nameScreen: document.getElementById('nameScreen'),
        leaderboardScreen: document.getElementById('leaderboardScreen'),
        gameOverScreen: document.getElementById('gameOverScreen'),
        readyScreen: document.getElementById('readyScreen'),
        score: document.getElementById('score'),
        finalScore: document.getElementById('finalScore'),
        insultText: document.getElementById('insultText'),
        subInsult: document.getElementById('subInsult'),
        nameInput: document.getElementById('nameInput'),
        nameError: document.getElementById('nameError'),
        leaderboardList: document.getElementById('leaderboardList'),
        playerNameDisplay: document.getElementById('playerNameDisplay'),
        readyPlayerName: document.getElementById('readyPlayerName'),
        newRecord: document.getElementById('newRecord'),
        rankDisplay: document.getElementById('rankDisplay')
    };

    let game = { width: 0, height: 0, groundY: 0, state: 'loading', score: 0, speed: CONFIG.baseSpeed, time: 0, shake: 0, windTime: 0 };
    let cat = null;
    let obstacles = [];
    let particles = [];
    let env = { stars: [], bgTrees: [], fog: [], fireflies: [] };

    function drawWitch(context, time) {
        context.clearRect(0, 0, 150, 190);
        const cx = 75, cy = 105;
        const hover = Math.sin(time * 2) * 8;
        const sway = Math.sin(time * 1.5) * 4;
        
        context.save();
        context.translate(cx + sway, cy + hover);
        
        for (let i = 4; i >= 0; i--) {
            const ag = context.createRadialGradient(0, -15, 5, 0, -15, 70 + i * 12);
            ag.addColorStop(0, `rgba(0, 255, 100, ${0.12 - i * 0.02})`);
            ag.addColorStop(0.6, `rgba(0, 200, 80, ${0.06 - i * 0.01})`);
            ag.addColorStop(1, 'transparent');
            context.fillStyle = ag;
            context.beginPath();
            context.arc(0, -15, 70 + i * 12, 0, Math.PI * 2);
            context.fill();
        }
        
        context.fillStyle = '#00ff70';
        for (let i = 0; i < 12; i++) {
            const a = time * 0.6 + i * 0.52;
            const r = 45 + Math.sin(time * 2 + i) * 18;
            const px = Math.cos(a) * r;
            const py = Math.sin(a) * r * 0.55 - 15;
            const s = 1.5 + Math.sin(time * 3 + i) * 0.8;
            context.globalAlpha = 0.5 + Math.sin(time * 4 + i) * 0.5;
            context.beginPath();
            context.arc(px, py, s, 0, Math.PI * 2);
            context.fill();
        }
        context.globalAlpha = 1;
        
        context.fillStyle = '#030303';
        context.beginPath();
        context.moveTo(0, -25);
        context.bezierCurveTo(-45, 5, -50, 55, -38, 80);
        context.lineTo(38, 80);
        context.bezierCurveTo(50, 55, 45, 5, 0, -25);
        context.closePath();
        context.fill();
        context.strokeStyle = 'rgba(0, 255, 100, 0.25)';
        context.lineWidth = 2;
        context.stroke();
        
        context.fillStyle = '#050505';
        context.beginPath();
        context.ellipse(0, -32, 18, 22, 0, 0, Math.PI * 2);
        context.fill();
        context.strokeStyle = 'rgba(0, 255, 100, 0.15)';
        context.lineWidth = 1;
        context.stroke();
        
        context.fillStyle = '#020202';
        context.beginPath();
        const hatTip = -90 + Math.sin(time * 3) * 3;
        context.moveTo(0, hatTip);
        context.bezierCurveTo(-12, -70, -28, -55, -35, -48);
        context.lineTo(35, -48);
        context.bezierCurveTo(28, -55, 12, -70, 0, hatTip);
        context.closePath();
        context.fill();
        context.strokeStyle = 'rgba(0, 255, 100, 0.2)';
        context.lineWidth = 1.5;
        context.stroke();
        
        context.fillStyle = '#030303';
        context.beginPath();
        context.ellipse(0, -48, 36, 9, 0, 0, Math.PI * 2);
        context.fill();
        context.stroke();
        
        context.fillStyle = '#00ff70';
        context.shadowColor = '#00ff70';
        context.shadowBlur = 12;
        context.fillRect(-26, -56, 52, 4);
        context.shadowBlur = 0;
        
        const eyeFlicker = 0.65 + Math.sin(time * 10) * 0.35;
        context.fillStyle = '#000';
        context.beginPath();
        context.ellipse(-7, -35, 7, 9, 0, 0, Math.PI * 2);
        context.fill();
        context.beginPath();
        context.ellipse(7, -35, 7, 9, 0, 0, Math.PI * 2);
        context.fill();
        
        for (let e = -1; e <= 1; e += 2) {
            const eg = context.createRadialGradient(e * 7, -35, 0, e * 7, -35, 14);
            eg.addColorStop(0, `rgba(0, 255, 100, ${eyeFlicker})`);
            eg.addColorStop(0.4, `rgba(0, 200, 80, ${eyeFlicker * 0.4})`);
            eg.addColorStop(1, 'transparent');
            context.fillStyle = eg;
            context.beginPath();
            context.arc(e * 7, -35, 14, 0, Math.PI * 2);
            context.fill();
        }
        
        context.fillStyle = '#00ff70';
        context.shadowColor = '#00ff70';
        context.shadowBlur = 15;
        context.beginPath();
        context.ellipse(-7, -35, 3.5, 5.5, 0, 0, Math.PI * 2);
        context.fill();
        context.beginPath();
        context.ellipse(7, -35, 3.5, 5.5, 0, 0, Math.PI * 2);
        context.fill();
        
        context.fillStyle = '#000';
        context.shadowBlur = 0;
        context.beginPath();
        context.ellipse(-7, -35, 1.2, 4.5, 0, 0, Math.PI * 2);
        context.fill();
        context.beginPath();
        context.ellipse(7, -35, 1.2, 4.5, 0, 0, Math.PI * 2);
        context.fill();
        
        context.strokeStyle = '#00ff70';
        context.lineWidth = 2;
        context.shadowColor = '#00ff70';
        context.shadowBlur = 8;
        context.beginPath();
        context.moveTo(-10, -20);
        context.quadraticCurveTo(0, -14, 10, -20);
        context.stroke();
        
        context.fillStyle = '#00ff70';
        for (let t = -8; t <= 8; t += 4) {
            context.beginPath();
            context.moveTo(t - 1.5, -19);
            context.lineTo(t, -14);
            context.lineTo(t + 1.5, -19);
            context.closePath();
            context.fill();
        }
        context.shadowBlur = 0;
        
        context.fillStyle = '#060606';
        context.save();
        context.translate(-35, 22);
        context.rotate(-0.35 + Math.sin(time * 2) * 0.12);
        context.beginPath();
        context.ellipse(0, 0, 7, 9, 0, 0, Math.PI * 2);
        context.fill();
        for (let f = -2; f <= 2; f++) {
            context.beginPath();
            context.moveTo(f * 2.8, -7);
            context.lineTo(f * 3.5, -22 - Math.abs(f) * 2);
            context.lineTo(f * 3.5 + 1.5, -22 - Math.abs(f) * 2);
            context.lineTo(f * 2.8 + 1.5, -7);
            context.closePath();
            context.fill();
        }
        context.strokeStyle = 'rgba(0, 255, 100, 0.3)';
        context.lineWidth = 1;
        for (let f = -2; f <= 2; f++) {
            context.beginPath();
            context.arc(f * 3.5 + 0.75, -24 - Math.abs(f) * 2, 2.5, 0, Math.PI * 2);
            context.stroke();
        }
        context.restore();
        
        context.save();
        context.translate(35, 22);
        context.rotate(0.35 + Math.sin(time * 2 + 1) * 0.12);
        context.fillStyle = '#060606';
        context.beginPath();
        context.ellipse(0, 0, 7, 9, 0, 0, Math.PI * 2);
        context.fill();
        for (let f = -2; f <= 2; f++) {
            context.beginPath();
            context.moveTo(f * 2.8, -7);
            context.lineTo(f * 3.2, -16 - Math.abs(f));
            context.lineTo(f * 3.2 + 1.5, -16 - Math.abs(f));
            context.lineTo(f * 2.8 + 1.5, -7);
            context.closePath();
            context.fill();
        }
        
        const og = context.createRadialGradient(0, -26, 0, 0, -26, 12);
        og.addColorStop(0, '#80ffaa');
        og.addColorStop(0.35, '#00ff70');
        og.addColorStop(0.7, '#00aa50');
        og.addColorStop(1, '#005530');
        context.fillStyle = og;
        context.shadowColor = '#00ff70';
        context.shadowBlur = 25;
        context.beginPath();
        context.arc(0, -26, 11, 0, Math.PI * 2);
        context.fill();
        context.shadowBlur = 0;
        
        context.fillStyle = 'rgba(255, 255, 255, 0.5)';
        context.beginPath();
        context.arc(-3, -30, 3, 0, Math.PI * 2);
        context.fill();
        context.restore();
        context.restore();
    }

    function drawCat(c, context, scale, showFlag) {
        if (!context) context = ctx;
        if (scale === undefined) scale = 1;
        if (showFlag === undefined) showFlag = true;
        
        context.save();
        context.translate(c.x + c.w / 2, c.y + c.h / 2);
        if (scale !== 1) context.scale(scale, scale);
        
        const tr = c.alive ? Math.min(Math.max(c.vy * 3.5, -30), 60) : 50;
        c.rotation += (tr - c.rotation) * 0.12;
        context.rotate(c.rotation * Math.PI / 180);
        
        c.tailPhase += 0.14;
        c.blinkTimer += 0.03;
        c.flagWave = (c.flagWave || 0) + 0.18;
        
        const w = c.w, h = c.h;
        
        context.fillStyle = 'rgba(0,0,0,0.28)';
        context.beginPath();
        context.ellipse(4, h/2 + 9, w/3.2, 6.5, 0, 0, Math.PI * 2);
        context.fill();
        
        context.strokeStyle = '#0a0a0a';
        context.lineWidth = 6.5;
        context.lineCap = 'round';
        const tw = Math.sin(c.tailPhase) * 15;
        const tw2 = Math.cos(c.tailPhase * 0.9) * 11;
        context.beginPath();
        context.moveTo(-w/3, 3);
        context.bezierCurveTo(-w/2 - 7, tw * 0.5, -w/2 - 17, -13 + tw2, -w/2 - 24, -32 + tw);
        context.stroke();
        context.lineWidth = 5;
        context.beginPath();
        context.moveTo(-w/2 - 24, -32 + tw);
        context.lineTo(-w/2 - 27, -40 + tw * 1.1);
        context.stroke();
        
        context.fillStyle = '#070707';
        context.beginPath();
        context.ellipse(-w/5, h/3, 7.5, 6, -0.3, 0, Math.PI * 2);
        context.fill();
        
        const bg = context.createRadialGradient(0, 0, 0, 0, 0, w/2);
        bg.addColorStop(0, '#1a1a1a');
        bg.addColorStop(0.5, '#0f0f0f');
        bg.addColorStop(1, '#050505');
        context.fillStyle = bg;
        context.beginPath();
        context.ellipse(0, 3, w/2.4, h/2.5, 0, 0, Math.PI * 2);
        context.fill();
        
        context.fillStyle = 'rgba(255,255,255,0.025)';
        context.beginPath();
        context.ellipse(-4, -4, w/4.5, h/5.5, -0.4, 0, Math.PI * 2);
        context.fill();
        
        context.fillStyle = bg;
        context.beginPath();
        context.ellipse(w/5, -3.5, w/2.8, h/2.7, 0, 0, Math.PI * 2);
        context.fill();
        
        const ex = w/5, ey = -h/2.5;
        context.fillStyle = '#090909';
        context.beginPath();
        context.moveTo(ex - 9, ey + 7);
        context.lineTo(ex - 16, ey - 17);
        context.lineTo(ex - 2, ey + 2);
        context.closePath();
        context.fill();
        context.beginPath();
        context.moveTo(ex + 9, ey + 7);
        context.lineTo(ex + 16, ey - 17);
        context.lineTo(ex + 2, ey + 2);
        context.closePath();
        context.fill();
        
        context.fillStyle = '#181010';
        context.beginPath();
        context.moveTo(ex - 7, ey + 5);
        context.lineTo(ex - 12, ey - 10);
        context.lineTo(ex - 3, ey + 2);
        context.closePath();
        context.fill();
        context.beginPath();
        context.moveTo(ex + 7, ey + 5);
        context.lineTo(ex + 12, ey - 10);
        context.lineTo(ex + 3, ey + 2);
        context.closePath();
        context.fill();
        
        const eyeX = w/5, eyeY = -5;
        const blink = Math.sin(c.blinkTimer * 5) > 0.97 ? 0.1 : 1;
        
        const eg = context.createRadialGradient(eyeX, eyeY, 0, eyeX, eyeY, 20);
        eg.addColorStop(0, c.alive ? 'rgba(64, 255, 128, 0.45)' : 'rgba(80, 40, 40, 0.2)');
        eg.addColorStop(1, 'transparent');
        context.fillStyle = eg;
        context.fillRect(eyeX - 22, eyeY - 20, 44, 40);
        
        context.fillStyle = c.alive ? '#40ff80' : '#555';
        context.beginPath();
        context.ellipse(eyeX - 6.5, eyeY, 5.8, 5.8 * blink, 0, 0, Math.PI * 2);
        context.fill();
        context.beginPath();
        context.ellipse(eyeX + 6.5, eyeY, 5.8, 5.8 * blink, 0, 0, Math.PI * 2);
        context.fill();
        
        if (blink > 0.5) {
            context.fillStyle = '#000';
            context.beginPath();
            context.ellipse(eyeX - 6, eyeY, 2, 4.8, 0, 0, Math.PI * 2);
            context.fill();
            context.beginPath();
            context.ellipse(eyeX + 7, eyeY, 2, 4.8, 0, 0, Math.PI * 2);
            context.fill();
            
            context.fillStyle = 'rgba(255,255,255,0.85)';
            context.beginPath();
            context.arc(eyeX - 4.5, eyeY - 2.2, 1.8, 0, Math.PI * 2);
            context.fill();
            context.beginPath();
            context.arc(eyeX + 8.5, eyeY - 2.2, 1.8, 0, Math.PI * 2);
            context.fill();
        }
        
        context.fillStyle = '#281515';
        context.beginPath();
        context.moveTo(eyeX + 17, eyeY + 3);
        context.lineTo(eyeX + 13, eyeY + 8.5);
        context.lineTo(eyeX + 21, eyeY + 8.5);
        context.closePath();
        context.fill();
        
        context.fillStyle = 'rgba(255,255,255,0.18)';
        context.beginPath();
        context.ellipse(eyeX + 16, eyeY + 5, 2.2, 1.3, -0.3, 0, Math.PI * 2);
        context.fill();
        
        context.strokeStyle = '#180a0a';
        context.lineWidth = 1.3;
        context.lineCap = 'round';
        context.beginPath();
        context.moveTo(eyeX + 17, eyeY + 8.5);
        context.lineTo(eyeX + 17, eyeY + 12);
        context.stroke();
        context.beginPath();
        context.moveTo(eyeX + 17, eyeY + 12);
        context.quadraticCurveTo(eyeX + 12, eyeY + 16, eyeX + 10, eyeY + 12);
        context.stroke();
        context.beginPath();
        context.moveTo(eyeX + 17, eyeY + 12);
        context.quadraticCurveTo(eyeX + 22, eyeY + 16, eyeX + 24, eyeY + 12);
        context.stroke();
        
        context.strokeStyle = 'rgba(75, 75, 75, 0.65)';
        context.lineWidth = 0.9;
        for (let i = -1; i <= 1; i++) {
            context.beginPath();
            context.moveTo(eyeX + 23, eyeY + 7 + i * 3);
            context.lineTo(eyeX + 40, eyeY + 5 + i * 5.5);
            context.stroke();
        }
        
        context.fillStyle = '#0b0b0b';
        context.beginPath();
        context.ellipse(w/5 - 5, h/3 + 3, 7.5, 5.8, -0.15, 0, Math.PI * 2);
        context.fill();
        context.fillStyle = '#181010';
        context.beginPath();
        context.arc(w/5 - 5, h/3 + 4, 3.2, 0, Math.PI * 2);
        context.fill();
        
        context.fillStyle = '#0b0b0b';
        context.beginPath();
        context.ellipse(w/5 + 11, h/3 + 3, 7.5, 5.8, 0.15, 0, Math.PI * 2);
        context.fill();
        context.fillStyle = '#181010';
        context.beginPath();
        context.arc(w/5 + 11, h/3 + 4, 3.2, 0, Math.PI * 2);
        context.fill();
        
        if (showFlag) {
            const fx = w/5 + 11, fy = h/3 - 4;
            const fw = c.flagWave;
            
            context.strokeStyle = '#5a3a22';
            context.lineWidth = 2.8;
            context.lineCap = 'round';
            context.beginPath();
            context.moveTo(fx, fy + 8);
            context.lineTo(fx, fy - 42);
            context.stroke();
            
            context.fillStyle = '#40ff80';
            context.shadowColor = '#40ff80';
            context.shadowBlur = 10;
            context.beginPath();
            context.arc(fx, fy - 45, 3.8, 0, Math.PI * 2);
            context.fill();
            context.shadowBlur = 0;
            
            context.save();
            context.translate(fx, fy - 42);
            
            const wa = 3.5;
            context.beginPath();
            context.moveTo(0, 0);
            for (let i = 0; i <= 36; i += 2) {
                const wy = Math.sin((i / 36) * Math.PI * 2.5 + fw) * wa * (i / 36);
                context.lineTo(i, wy);
            }
            const rw = Math.sin(fw) * wa;
            context.lineTo(36 + rw, 11);
            for (let i = 36; i >= 0; i -= 2) {
                const wy = 22 + Math.sin((i / 36) * Math.PI * 2.5 + fw + 1) * wa * (i / 36);
                context.lineTo(i, wy);
            }
            context.closePath();
            
            const flg = context.createLinearGradient(0, 0, 36, 22);
            flg.addColorStop(0, '#081510');
            flg.addColorStop(0.5, '#122520');
            flg.addColorStop(1, '#081510');
            context.fillStyle = flg;
            context.fill();
            
            context.strokeStyle = '#40ff80';
            context.lineWidth = 1.3;
            context.stroke();
            
            const lx = 18 + Math.sin(fw) * 1.8, ly = 11;
            
            context.beginPath();
            context.arc(lx, ly, 8, 0, Math.PI * 2);
            context.fillStyle = 'rgba(64, 255, 128, 0.2)';
            context.fill();
            context.strokeStyle = '#40ff80';
            context.lineWidth = 1.3;
            context.stroke();
            
            if (LOGO_IMAGE.loaded && LOGO_IMAGE.img) {
                context.drawImage(LOGO_IMAGE.img, lx - 8, ly - 8, 16, 16);
            } else {
                context.font = 'bold 12px Arial';
                context.fillStyle = '#40ff80';
                context.textAlign = 'center';
                context.textBaseline = 'middle';
                context.shadowColor = '#40ff80';
                context.shadowBlur = 7;
                context.fillText('S', lx, ly + 1);
                context.shadowBlur = 0;
            }
            
            context.fillStyle = '#40ff80';
            for (let i = 0; i < 4; i++) {
                const sx = 5 + i * 8.5 + Math.sin(fw * 2 + i) * 1.8;
                const sy = 3.5 + Math.cos(fw * 2 + i * 2) * 1.8;
                const ss = 1 + Math.sin(fw * 2 + i) * 0.5;
                context.beginPath();
                context.arc(sx, sy, ss, 0, Math.PI * 2);
                context.fill();
            }
            
            context.restore();
        }
        
        context.restore();
    }    function isNameTaken(name) {
        const ln = name.toLowerCase().trim();
        return ['siggy', 'admin', '0xrikk', '990rr'].includes(ln) || leaderboard.some(p => p.name.toLowerCase() === ln && p.id !== currentPlayer.id);
    }

    function validateName(name) {
        const n = name.trim();
        if (n.length < 2) return { valid: false, message: "Min 2 characters" };
        if (n.length > 12) return { valid: false, message: "Max 12 characters" };
        if (!/^[a-zA-Z0-9_]+$/.test(n)) return { valid: false, message: "Letters, numbers, _ only" };
        if (isNameTaken(name)) return { valid: false, message: "Name taken!" };
        return { valid: true, message: "" };
    }

    function updateLeaderboard(name, score) {
        let idx = leaderboard.findIndex(p => p.id === currentPlayer.id);
        if (idx >= 0) { 
            if (score > leaderboard[idx].score) leaderboard[idx].score = score; 
        } else { 
            currentPlayer.id = Date.now(); 
            leaderboard.push({ name: name, score: score, id: currentPlayer.id }); 
        }
        leaderboard.sort((a, b) => b.score - a.score);
    }

    function getPlayerRank() { 
        return leaderboard.findIndex(p => p.id === currentPlayer.id) + 1; 
    }

    function renderLeaderboard() {
        DOM.leaderboardList.innerHTML = '';
        leaderboard.slice(0, 15).forEach((p, i) => {
            const rank = i + 1;
            const isCurrent = p.id === currentPlayer.id;
            const item = document.createElement('div');
            item.className = 'leaderboard-item' + (isCurrent ? ' current-player' : '') + (rank <= 3 ? ' top-' + rank : '');
            const rd = rank === 1 ? '👑' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : '#' + rank;
            item.innerHTML = '<div class="rank ' + (rank <= 3 ? 'rank-' + rank : 'rank-default') + '">' + rd + '</div><div class="player-info"><div class="player-name' + (isCurrent ? ' current' : '') + '">' + p.name + (isCurrent ? ' (You)' : '') + '</div></div><div class="player-score">' + p.score + '</div>';
            DOM.leaderboardList.appendChild(item);
        });
    }

    function showScreen(id) {
        [DOM.menuScreen, DOM.nameScreen, DOM.leaderboardScreen, DOM.gameOverScreen, DOM.readyScreen].forEach(s => s.classList.add('hidden'));
        document.getElementById(id).classList.remove('hidden');
    }

    function goToMenu() { game.state = 'menu'; DOM.score.classList.add('hidden'); showScreen('menuScreen'); }
    function goToNameInput() { DOM.nameInput.value = currentPlayer.name; DOM.nameError.textContent = ''; DOM.nameInput.classList.remove('error'); showScreen('nameScreen'); }
    function goToLeaderboard() { renderLeaderboard(); showScreen('leaderboardScreen'); }

    function resize() {
        const r = container.getBoundingClientRect();
        game.width = r.width;
        game.height = r.height;
        canvas.width = game.width;
        canvas.height = game.height;
        game.groundY = game.height - 55;
    }

    function createCat() {
        return { x: game.width * 0.2, y: game.height * 0.45, w: CONFIG.catSize, h: CONFIG.catSize * 0.9, vy: 0, rotation: 0, alive: true, tailPhase: 0, blinkTimer: 0, flagWave: 0 };
    }

    function initEnvironment() {
        env.stars = [];
        for (let i = 0; i < 90; i++) env.stars.push({ x: Math.random() * game.width, y: Math.random() * game.height * 0.55, size: Math.random() * 2.2 + 0.4, phase: Math.random() * Math.PI * 2, speed: 0.6 + Math.random() * 2 });
        env.bgTrees = [];
        for (let l = 0; l < 4; l++) for (let i = 0; i < 7; i++) env.bgTrees.push({ x: i * (game.width / 4.5) + Math.random() * 70 - 35, h: 60 + Math.random() * 110 + l * 28, layer: l, swayPhase: Math.random() * Math.PI * 2, swaySpeed: 0.6 + Math.random() * 0.4 });
        env.bgTrees.sort((a, b) => a.layer - b.layer);
        env.fog = [];
        for (let i = 0; i < 10; i++) env.fog.push({ x: Math.random() * game.width * 1.5, y: game.height * 0.3 + Math.random() * game.height * 0.5, w: 90 + Math.random() * 180, h: 35 + Math.random() * 55, speed: 0.1 + Math.random() * 0.18, alpha: 0.03 + Math.random() * 0.04 });
        env.fireflies = [];
        for (let i = 0; i < 28; i++) env.fireflies.push({ x: Math.random() * game.width, y: game.height * 0.12 + Math.random() * game.height * 0.68, size: 1.2 + Math.random() * 2.2, phase: Math.random() * Math.PI * 2, speedX: 0.2 + Math.random() * 0.35, amplitude: 12 + Math.random() * 28, glowSpeed: 1.2 + Math.random() * 2.5 });
    }

    function initGame() {
        resize();
        cat = createCat();
        obstacles = [];
        particles = [];
        game.score = 0;
        game.speed = CONFIG.baseSpeed;
        game.time = 0;
        game.shake = 0;
        game.windTime = 0;
        DOM.score.textContent = '0';
        initEnvironment();
    }

    function createObstacle() {
        const gap = CONFIG.gapMin + Math.random() * (CONFIG.gapMax - CONFIG.gapMin);
        const topH = 55 + Math.random() * (game.groundY - gap - 140);
        obstacles.push({ x: game.width + 55, topH: topH, bottomY: topH + gap, w: 60, passed: false, swayPhase: Math.random() * Math.PI * 2 });
    }

    function drawObstacle(obs) {
        const sway = Math.sin(game.windTime * 1.3 + obs.swayPhase) * 4;
        drawSafeZone(obs);
        drawTree(obs.x, 0, obs.topH, true, sway);
        drawTree(obs.x, obs.bottomY, game.groundY - obs.bottomY, false, sway);
    }

    function drawSafeZone(obs) {
        const cx = obs.x + 30, gt = obs.topH, gb = obs.bottomY;
        const g = ctx.createLinearGradient(cx - 40, 0, cx + 40, 0);
        g.addColorStop(0, 'transparent');
        g.addColorStop(0.35, 'rgba(64, 255, 128, 0.07)');
        g.addColorStop(0.5, 'rgba(64, 255, 128, 0.12)');
        g.addColorStop(0.65, 'rgba(64, 255, 128, 0.07)');
        g.addColorStop(1, 'transparent');
        ctx.fillStyle = g;
        ctx.fillRect(cx - 40, gt + 6, 80, gb - gt - 12);
        ctx.strokeStyle = 'rgba(64, 255, 128, 0.2)';
        ctx.lineWidth = 1;
        ctx.setLineDash([6, 6]);
        ctx.beginPath();
        ctx.moveTo(cx - 32, gt + 4);
        ctx.lineTo(cx + 32, gt + 4);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(cx - 32, gb - 4);
        ctx.lineTo(cx + 32, gb - 4);
        ctx.stroke();
        ctx.setLineDash([]);
    }

    function drawTree(x, startY, height, isTop, sway) {
        const cx = x + 30, tw = 20;
        const tg = ctx.createLinearGradient(cx - tw, 0, cx + tw, 0);
        tg.addColorStop(0, '#18120a');
        tg.addColorStop(0.25, '#2a2016');
        tg.addColorStop(0.5, '#352818');
        tg.addColorStop(0.75, '#2a2016');
        tg.addColorStop(1, '#18120a');
        ctx.fillStyle = tg;
        
        ctx.beginPath();
        if (isTop) {
            ctx.moveTo(cx - tw/2 - 3, startY);
            ctx.lineTo(cx + tw/2 + 3, startY);
            ctx.quadraticCurveTo(cx + tw/2 + sway * 0.4, startY + height * 0.5, cx + tw/2 - 2 + sway, startY + height - 28);
            ctx.lineTo(cx - tw/2 + 2 + sway, startY + height - 28);
            ctx.quadraticCurveTo(cx - tw/2 + sway * 0.4, startY + height * 0.5, cx - tw/2 - 3, startY);
        } else {
            ctx.moveTo(cx - tw/2 + 2 + sway, startY + 28);
            ctx.lineTo(cx + tw/2 - 2 + sway, startY + 28);
            ctx.quadraticCurveTo(cx + tw/2 + 5, startY + height * 0.5, cx + tw/2 + 7, startY + height);
            ctx.lineTo(cx - tw/2 - 7, startY + height);
            ctx.quadraticCurveTo(cx - tw/2 - 5, startY + height * 0.5, cx - tw/2 + 2 + sway, startY + 28);
        }
        ctx.closePath();
        ctx.fill();
        
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.25)';
        ctx.lineWidth = 1;
        const bs = isTop ? startY + 12 : startY + 35;
        const be = isTop ? startY + height - 38 : startY + height - 12;
        for (let i = bs; i < be; i += 14) {
            ctx.beginPath();
            ctx.moveTo(cx - tw/2 + 4, i);
            ctx.quadraticCurveTo(cx, i + 7, cx - tw/2 + 5, i + 14);
            ctx.stroke();
        }
        
        for (let b = 0; b < 3; b++) {
            const by = isTop ? startY + height * (0.35 + b * 0.18) : startY + height * (0.25 + b * 0.2);
            const side = b % 2 === 0 ? 1 : -1;
            const bl = 18 + Math.random() * 12;
            const bs2 = Math.sin(game.windTime * (1.2 + b * 0.3) + b) * 5;
            ctx.strokeStyle = '#18120a';
            ctx.lineWidth = 3.5 - b * 0.6;
            ctx.beginPath();
            ctx.moveTo(cx + side * (tw/2 - 2), by);
            ctx.quadraticCurveTo(cx + side * (tw/2 + bl/2) + bs2, by - 8, cx + side * (tw/2 + bl) + bs2 * 1.3, by - 3 + bs2);
            ctx.stroke();
        }
        
        const fy = isTop ? startY + height : startY;
        drawFoliage(cx + sway * 0.5, fy, isTop);
        
        if (isTop) {
            ctx.strokeStyle = 'rgba(30, 55, 28, 0.55)';
            ctx.lineWidth = 1.8;
            for (let v = -1; v <= 1; v++) {
                const vx = cx + v * 9 + sway;
                const vs = Math.sin(game.windTime * 1.1 + v) * 9;
                ctx.beginPath();
                ctx.moveTo(vx, startY + height - 12);
                ctx.bezierCurveTo(vx + vs * 0.4, startY + height + 18, vx + vs * 0.8, startY + height + 35, vx + vs, startY + height + 48);
                ctx.stroke();
            }
        }
        
        if (!isTop) {
            ctx.fillStyle = '#18120a';
            for (let r = -2; r <= 2; r++) {
                if (r === 0) continue;
                const rx = cx + r * 7;
                ctx.beginPath();
                ctx.moveTo(rx, startY + height - 6);
                ctx.quadraticCurveTo(rx + r * 7, startY + height + 4, rx + r * 11, startY + height);
                ctx.quadraticCurveTo(rx + r * 4, startY + height - 6, rx, startY + height - 10);
                ctx.fill();
            }
        }
    }

    function drawFoliage(x, y, isTop) {
        const layers = 4, baseSize = 40;
        const wo = Math.sin(game.windTime * 1.25) * 4;
        for (let i = layers - 1; i >= 0; i--) {
            const off = isTop ? i * 9 : -i * 9;
            const ly = y + (isTop ? -off : off);
            const size = baseSize - i * 5;
            const lw = wo * (1 - i * 0.18);
            
            if (i === layers - 1) {
                const glow = ctx.createRadialGradient(x + lw, ly, 0, x + lw, ly, size + 25);
                glow.addColorStop(0, 'rgba(28, 55, 25, 0.18)');
                glow.addColorStop(1, 'transparent');
                ctx.fillStyle = glow;
                ctx.beginPath();
                ctx.arc(x + lw, ly, size + 25, 0, Math.PI * 2);
                ctx.fill();
            }
            
            const fg = ctx.createRadialGradient(x + lw - 4, ly - 4, 0, x + lw, ly, size);
            fg.addColorStop(0, 'rgba(38, 70, 35, ' + (0.88 + i * 0.03) + ')');
            fg.addColorStop(0.45, 'rgba(25, 52, 22, ' + (0.88 + i * 0.03) + ')');
            fg.addColorStop(1, 'rgba(12, 32, 10, ' + (0.85 + i * 0.03) + ')');
            ctx.fillStyle = fg;
            
            ctx.beginPath();
            for (let p = 0; p <= 10; p++) {
                const angle = (p / 10) * Math.PI * 2;
                const wobble = Math.sin(angle * 4.5 + game.windTime * 1.4 + i) * 7;
                const r = size + wobble;
                const px = x + lw + Math.cos(angle) * r;
                const py = ly + Math.sin(angle) * r * 0.52;
                p === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.fill();
        }
    }

    function drawSky() {
        const g = ctx.createLinearGradient(0, 0, 0, game.height);
        g.addColorStop(0, '#040810');
        g.addColorStop(0.25, '#081015');
        g.addColorStop(0.5, '#0a151a');
        g.addColorStop(0.75, '#081412');
        g.addColorStop(1, '#06100d');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, game.width, game.height);
        
        const ag = ctx.createLinearGradient(0, 0, game.width, game.height * 0.4);
        ag.addColorStop(0, 'rgba(0, 70, 40, 0.025)');
        ag.addColorStop(0.5, 'rgba(0, 90, 50, 0.04)');
        ag.addColorStop(1, 'rgba(0, 50, 30, 0.02)');
        ctx.fillStyle = ag;
        ctx.fillRect(0, 0, game.width, game.height * 0.5);
    }

    function drawStars() {
        game.time += 0.016;
        for (let i = 0; i < env.stars.length; i++) {
            const s = env.stars[i];
            const t = Math.sin(game.time * s.speed + s.phase) * 0.5 + 0.5;
            const a = 0.35 + t * 0.65;
            const sz = s.size * (0.7 + t * 0.3);
            ctx.beginPath();
            ctx.arc(s.x, s.y, sz, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(190, 255, 210, ' + a + ')';
            ctx.fill();
            if (s.size > 1.7) {
                ctx.beginPath();
                ctx.arc(s.x, s.y, sz * 2.3, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(140, 255, 170, ' + (a * 0.12) + ')';
                ctx.fill();
            }
        }
    }

    function drawMoon() {
        const mx = game.width - 52, my = 62;
        const mg = ctx.createRadialGradient(mx, my, 18, mx, my, 100);
        mg.addColorStop(0, 'rgba(190, 255, 210, 0.14)');
        mg.addColorStop(0.4, 'rgba(140, 210, 170, 0.05)');
        mg.addColorStop(1, 'transparent');
        ctx.fillStyle = mg;
        ctx.beginPath();
        ctx.arc(mx, my, 100, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(mx, my, 26, 0, Math.PI * 2);
        const mf = ctx.createRadialGradient(mx - 7, my - 7, 0, mx, my, 26);
        mf.addColorStop(0, '#e0ffe8');
        mf.addColorStop(0.4, '#c0e8c8');
        mf.addColorStop(1, '#98c8a8');
        ctx.fillStyle = mf;
        ctx.fill();
        
        ctx.fillStyle = 'rgba(90, 120, 100, 0.28)';
        ctx.beginPath(); 
        ctx.arc(mx - 7, my - 5, 5.5, 0, Math.PI * 2); 
        ctx.fill();
        ctx.beginPath(); 
        ctx.arc(mx + 7, my + 6, 3.8, 0, Math.PI * 2); 
        ctx.fill();
        ctx.beginPath(); 
        ctx.arc(mx - 2, my + 9, 2.8, 0, Math.PI * 2); 
        ctx.fill();
    }

    function drawBgTrees() {
        game.windTime += 0.014;
        for (let i = 0; i < env.bgTrees.length; i++) {
            const t = env.bgTrees[i];
            const a = 0.07 + t.layer * 0.07;
            const sp = (0.1 + t.layer * 0.09) * game.speed;
            const sw = Math.sin(game.windTime * t.swaySpeed + t.swayPhase) * (4.5 - t.layer);
            const y = game.groundY, h = t.h;
            ctx.fillStyle = 'rgba(8, 14, 10, ' + a + ')';
            
            ctx.fillRect(t.x - 4, y - h, 8, h);
            for (let j = 0; j < 3; j++) {
                const lh = h * (0.33 - j * 0.055);
                const ly = y - h * (0.28 + j * 0.2);
                const ls = sw * (1 - j * 0.22);
                ctx.beginPath();
                ctx.moveTo(t.x + ls, ly - lh);
                ctx.lineTo(t.x - lh * 0.65, ly);
                ctx.lineTo(t.x + lh * 0.65, ly);
                ctx.closePath();
                ctx.fill();
            }
            
            if (game.state === 'playing' || game.state === 'dead') {
                t.x -= sp;
                if (t.x < -70) {
                    t.x = game.width + 70 + Math.random() * 55;
                    t.h = 60 + Math.random() * 110 + t.layer * 28;
                }
            }
        }
    }

    function drawFog() {
        for (let i = 0; i < env.fog.length; i++) {
            const f = env.fog[i];
            const fg = ctx.createRadialGradient(f.x + f.w/2, f.y, 0, f.x + f.w/2, f.y, f.w/2);
            fg.addColorStop(0, 'rgba(50, 85, 65, ' + f.alpha + ')');
            fg.addColorStop(0.6, 'rgba(35, 65, 50, ' + (f.alpha * 0.5) + ')');
            fg.addColorStop(1, 'transparent');
            ctx.fillStyle = fg;
            ctx.beginPath();
            ctx.ellipse(f.x + f.w/2, f.y, f.w/2, f.h/2, 0, 0, Math.PI * 2);
            ctx.fill();
            f.x -= f.speed;
            if (f.x + f.w < -50) { 
                f.x = game.width + 50; 
                f.y = game.height * 0.3 + Math.random() * game.height * 0.5; 
            }
        }
    }

    function drawGround() {
        const y = game.groundY;
        const gg = ctx.createLinearGradient(0, y - 22, 0, game.height);
        gg.addColorStop(0, '#0e1610');
        gg.addColorStop(0.3, '#080e0a');
        gg.addColorStop(1, '#040805');
        ctx.fillStyle = gg;
        ctx.fillRect(0, y - 14, game.width, game.height - y + 14);
        
        ctx.fillStyle = '#131d16';
        ctx.fillRect(0, y - 16, game.width, 13);
        
        for (let i = 0; i < game.width; i += 4) {
            const wp = game.windTime * 2.4 + i * 0.045;
            const wi = Math.sin(wp) * 2.8;
            const gh = 7 + Math.sin(i * 0.28) * 4.5;
            ctx.fillStyle = 'rgba(28, 52, 32, ' + (0.48 + Math.random() * 0.28) + ')';
            ctx.beginPath();
            ctx.moveTo(i, y - 7);
            ctx.quadraticCurveTo(i + wi, y - gh - 9, i + 1.8 + wi * 0.55, y - 7);
            ctx.fill();
        }
    }

    function drawFireflies() {
        for (let i = 0; i < env.fireflies.length; i++) {
            const f = env.fireflies[i];
            f.phase += 0.028;
            const gl = Math.sin(f.phase * f.glowSpeed) * 0.5 + 0.5;
            const yo = Math.sin(f.phase) * f.amplitude;
            const xo = Math.cos(f.phase * 0.8) * f.amplitude * 0.38;
            const x = f.x + xo, y = f.y + yo;
            
            const fg = ctx.createRadialGradient(x, y, 0, x, y, f.size * 11);
            fg.addColorStop(0, 'rgba(64, 255, 128, ' + (0.55 * gl) + ')');
            fg.addColorStop(0.32, 'rgba(40, 200, 90, ' + (0.28 * gl) + ')');
            fg.addColorStop(1, 'transparent');
            ctx.fillStyle = fg;
            ctx.beginPath();
            ctx.arc(x, y, f.size * 11, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.fillStyle = 'rgba(140, 255, 175, ' + (0.75 + gl * 0.25) + ')';
            ctx.beginPath();
            ctx.arc(x, y, f.size * (0.5 + gl * 0.5), 0, Math.PI * 2);
            ctx.fill();
            
            if (game.state === 'playing') {
                f.x -= f.speedX;
                if (f.x < -28) { 
                    f.x = game.width + 28; 
                    f.y = game.height * 0.12 + Math.random() * game.height * 0.68; 
                }
            }
        }
    }

    function createParticles(x, y, type) {
        const c = type === 'death' ? 32 : 7;
        for (let i = 0; i < c; i++) {
            const a = (Math.PI * 2 / c) * i + Math.random() * 0.65;
            const s = type === 'death' ? 4.5 + Math.random() * 7.5 : 2.2 + Math.random() * 2.8;
            particles.push({ 
                x: x, y: y, 
                vx: Math.cos(a) * s, 
                vy: Math.sin(a) * s - (type === 'death' ? 4.5 : 1.2), 
                life: type === 'death' ? 75 : 48, 
                maxLife: type === 'death' ? 75 : 48, 
                type: type, 
                size: type === 'death' ? 5.5 + Math.random() * 6.5 : 3.5 + Math.random() * 3.5, 
                hue: type === 'death' ? Math.random() * 38 : 125 + Math.random() * 28 
            });
        }
    }

    function updateParticles() {
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.vx; 
            p.y += p.vy; 
            p.vy += 0.14; 
            p.vx *= 0.98; 
            p.life--;
            if (p.life <= 0) particles.splice(i, 1);
        }
    }

    function drawParticles() {
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            const a = p.life / p.maxLife;
            const sz = p.size * (0.3 + a * 0.7);
            if (p.type === 'magic') {
                const pg = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, sz * 4.5);
                pg.addColorStop(0, 'hsla(' + p.hue + ', 88%, 58%, ' + a + ')');
                pg.addColorStop(0.5, 'hsla(' + p.hue + ', 78%, 48%, ' + (a * 0.38) + ')');
                pg.addColorStop(1, 'transparent');
                ctx.fillStyle = pg;
                ctx.beginPath();
                ctx.arc(p.x, p.y, sz * 4.5, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = 'hsla(' + p.hue + ', 92%, 68%, ' + a + ')';
                ctx.beginPath();
                ctx.arc(p.x, p.y, sz, 0, Math.PI * 2);
                ctx.fill();
            } else {
                ctx.fillStyle = 'hsla(' + p.hue + ', 100%, ' + (48 + (1 - a) * 30) + '%, ' + a + ')';
                ctx.beginPath();
                ctx.arc(p.x, p.y, sz, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = 'hsla(' + p.hue + ', 100%, 58%, ' + (a * 0.55) + ')';
                ctx.lineWidth = sz * 0.48;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x - p.vx * 4.5, p.y - p.vy * 4.5);
                ctx.stroke();
            }
        }
    }

    function checkCollision() {
        if (!cat || !cat.alive) return false;
        if (cat.y + cat.h > game.groundY - 7 || cat.y < -10) return true;
        const pd = 7.5;
        const cb = { 
            l: cat.x + pd, 
            r: cat.x + cat.w - pd, 
            t: cat.y + pd, 
            b: cat.y + cat.h - pd 
        };
        for (let i = 0; i < obstacles.length; i++) {
            const o = obstacles[i];
            const tw = 20, cx = o.x + 30;
            const ol = cx - tw/2 - 5, or = cx + tw/2 + 5;
            if (cb.r > ol && cb.l < or) {
                if (cb.t < o.topH - 7 || cb.b > o.bottomY + 7) return true;
            }
        }
        return false;
    }

    function jump() {
        if (game.state === 'menu') return;
        if (game.state === 'ready') { 
            game.state = 'playing'; 
            DOM.readyScreen.classList.add('hidden'); 
            createObstacle(); 
        }
        if (game.state === 'playing' && cat && cat.alive) { 
            cat.vy = CONFIG.jumpStrength; 
            createParticles(cat.x + 7, cat.y + cat.h / 2, 'magic'); 
        }
    }

    function update() {
        if (game.state !== 'playing' || !cat) return;
        cat.vy += CONFIG.gravity;
        cat.vy = Math.min(cat.vy, 12);
        cat.y += cat.vy;
        game.speed = Math.min(CONFIG.maxSpeed, CONFIG.baseSpeed + game.score * 0.014);
        
        for (let i = obstacles.length - 1; i >= 0; i--) {
            const o = obstacles[i];
            o.x -= game.speed;
            if (!o.passed && o.x + o.w < cat.x) {
                o.passed = true;
                game.score++;
                DOM.score.textContent = game.score;
                createParticles(cat.x + cat.w, cat.y + cat.h / 2, 'magic');
            }
            if (o.x + o.w < -35) obstacles.splice(i, 1);
        }
        
        const lo = obstacles[obstacles.length - 1];
        if (!lo || lo.x < game.width - CONFIG.treeSpacing) createObstacle();
        if (checkCollision()) die();
        updateParticles();
    }

    function die() {
        cat.alive = false;
        game.state = 'dead';
        game.shake = 18;
        createParticles(cat.x + cat.w / 2, cat.y + cat.h / 2, 'death');
        const ob = currentPlayer.bestScore;
        const nr = game.score > ob;
        if (nr) currentPlayer.bestScore = game.score;
        updateLeaderboard(currentPlayer.name, game.score);
        setTimeout(function() { showGameOver(nr); }, 780);
    }

    function showGameOver(nr) {
        const ins = INSULTS[Math.floor(Math.random() * INSULTS.length)];
        DOM.insultText.textContent = ins.main;
        DOM.subInsult.textContent = ins.sub;
        DOM.playerNameDisplay.textContent = currentPlayer.name;
        DOM.finalScore.textContent = game.score;
        if (nr) DOM.newRecord.classList.remove('hidden');
        else DOM.newRecord.classList.add('hidden');
        DOM.rankDisplay.textContent = 'Rank: #' + getPlayerRank() + ' of ' + leaderboard.length;
        DOM.score.classList.add('hidden');
        showScreen('gameOverScreen');
    }

    function render() {
        ctx.save();
        if (game.shake > 0) {
            ctx.translate((Math.random() - 0.5) * game.shake, (Math.random() - 0.5) * game.shake);
            game.shake *= 0.86;
            if (game.shake < 0.3) game.shake = 0;
        }
        drawSky();
        drawStars();
        drawMoon();
        drawBgTrees();
        drawFog();
        drawGround();
        for (let i = 0; i < obstacles.length; i++) drawObstacle(obstacles[i]);
        drawFireflies();
        drawParticles();
        if (cat) drawCat(cat, ctx, 1, true);
        ctx.restore();
    }

    function gameLoop() { 
        update(); 
        render(); 
        requestAnimationFrame(gameLoop); 
    }
    
    function startGame() {
        initGame();
        DOM.readyPlayerName.textContent = currentPlayer.name;
        showScreen('readyScreen');
        DOM.score.classList.remove('hidden');
        game.state = 'ready';
    
        // Enable mobile tap on ready screen
        DOM.readyScreen.style.pointerEvents = 'auto';
    }

    function drawCatPreviewAnim(pc, pcan) {
        pcan.width = 120;
        pcan.height = 120;
        const t = performance.now();
        const pcat = { 
            x: 32, y: 42, w: 50, h: 45, vy: 0, 
            rotation: Math.sin(t * 0.002) * 10 - 5, 
            alive: true, 
            tailPhase: t * 0.005, 
            blinkTimer: t * 0.0015, 
            flagWave: t * 0.006 
        };
        pc.clearRect(0, 0, 120, 120);
        drawCat(pcat, pc, 1, true);
    }

    let wt = 0;
    function animateWitch() {
        witchCanvas.width = 150;
        witchCanvas.height = 190;
        wt += 0.02;
        drawWitch(witchCtx, wt);
        requestAnimationFrame(animateWitch);
    }
    
    function animatePreview() {
        drawCatPreviewAnim(catPreviewCtx, catPreview);
        drawCatPreviewAnim(catPreview2Ctx, catPreview2);
        requestAnimationFrame(animatePreview);
    }

    document.getElementById('playBtn').addEventListener('click', function(e) { 
        e.preventDefault(); 
        if (currentPlayer.name) startGame(); 
        else goToNameInput(); 
    });
    document.getElementById('leaderboardBtn').addEventListener('click', function(e) { 
        e.preventDefault(); 
        goToLeaderboard(); 
    });
    document.getElementById('backToMenuBtn').addEventListener('click', function(e) { 
        e.preventDefault(); 
        goToMenu(); 
    });
    document.getElementById('confirmNameBtn').addEventListener('click', function(e) {
        e.preventDefault();
        const n = DOM.nameInput.value.trim();
        const v = validateName(n);
        if (v.valid) { 
            currentPlayer.name = n; 
            DOM.nameError.textContent = ''; 
            DOM.nameInput.classList.remove('error'); 
            startGame(); 
        } else { 
            DOM.nameError.textContent = v.message; 
            DOM.nameInput.classList.add('error'); 
        }
    });
    DOM.nameInput.addEventListener('keydown', function(e) { 
        if (e.key === 'Enter') { 
            e.preventDefault(); 
            document.getElementById('confirmNameBtn').click(); 
        } 
    });
    DOM.nameInput.addEventListener('input', function() { 
        DOM.nameInput.classList.remove('error'); 
        DOM.nameError.textContent = ''; 
    });
    document.getElementById('backFromLeaderboardBtn').addEventListener('click', function(e) { 
        e.preventDefault(); 
        goToMenu(); 
    });
    document.getElementById('menuBtn').addEventListener('click', function(e) { 
        e.preventDefault(); 
        goToMenu(); 
    });
    document.getElementById('restartBtn').addEventListener('click', function(e) { 
        e.preventDefault(); 
        startGame(); 
    });
    document.getElementById('viewLeaderboardBtn').addEventListener('click', function(e) { 
        e.preventDefault(); 
        goToLeaderboard(); 
    });
    
        document.addEventListener('keydown', function(e) {
        if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'KeyW') {
            e.preventDefault();
            if (game.state === 'ready' || game.state === 'playing') jump();
        }
        if (e.code === 'Escape' && (game.state === 'playing' || game.state === 'ready')) { 
            goToMenu(); 
            initGame(); 
        }
    });
    
    // Desktop click
    canvas.addEventListener('mousedown', function(e) { 
        e.preventDefault(); 
        jump(); 
    });
    
    // Mobile touch - canvas
    canvas.addEventListener('touchstart', function(e) { 
        e.preventDefault(); 
        jump(); 
    }, { passive: false });
    
    // Mobile touch - container (backup)
    container.addEventListener('touchstart', function(e) { 
        if (game.state === 'ready' || game.state === 'playing') {
            e.preventDefault(); 
            jump(); 
        }
    }, { passive: false });
    
    // Mobile touch - ready screen
    DOM.readyScreen.addEventListener('touchstart', function(e) { 
        if (game.state === 'ready') {
            e.preventDefault(); 
            jump(); 
        }
    }, { passive: false });
    
    canvas.addEventListener('contextmenu', function(e) { 
        e.preventDefault(); 
    });
    window.addEventListener('resize', function() { 
        resize(); 
        if (game.state === 'menu') initEnvironment(); 
    });
    document.body.addEventListener('touchmove', function(e) { 
        if (e.target === canvas) e.preventDefault(); 
    }, { passive: false });

    loadLogoImage(function() {
        DOM.loadingScreen.classList.add('hidden');
        DOM.menuScreen.classList.remove('hidden');
        game.state = 'menu';
        initGame();
        animatePreview();
        animateWitch();
        requestAnimationFrame(gameLoop);
    });
})();

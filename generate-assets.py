"""Generate the site's original, scalable botanical illustrations. No dependencies."""
from pathlib import Path
from math import sin, cos, pi
import random

random.seed(24)
assets = Path(__file__).parent / 'assets'
assets.mkdir(exist_ok=True)

def svg(body, view='0 0 200 200'):
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{view}"><defs><radialGradient id="p"><stop stop-color="#fffefa"/><stop offset=".75" stop-color="#fbfaeb"/><stop offset="1" stop-color="#e1e3cd"/></radialGradient><radialGradient id="c"><stop stop-color="#e5b945"/><stop offset="1" stop-color="#b78f2b"/></radialGradient><linearGradient id="l" x2="1" y2="1"><stop stop-color="#a4b28a"/><stop offset="1" stop-color="#4f7049"/></linearGradient></defs>{body}</svg>'

def flower(x, y, radius, yellow=False, angle=0):
    result = f'<g transform="translate({x} {y}) rotate({angle})">'
    for i in range(13):
        a = i * 360 / 13
        result += f'<ellipse cx="0" cy="{-radius*.53}" rx="{radius*.19}" ry="{radius*.5}" fill="{"#efce64" if yellow else "url(#p)"}" stroke="{"#d4b147" if yellow else "#d8ddc8"}" stroke-width=".55" transform="rotate({a})"/>'
        result += f'<path d="M0 {-radius*.25} Q-2 {-radius*.58} 0 {-radius*.92}" fill="none" stroke="{"#d8b348" if yellow else "#dde0ce"}" stroke-width=".6" transform="rotate({a})"/>'
    result += f'<circle r="{radius*.27}" fill="url(#c)"/>'
    for i in range(36):
        a = i * 2.399
        r = radius * .23 * (i / 36)**.5
        result += f'<circle cx="{cos(a)*r:.2f}" cy="{sin(a)*r:.2f}" r=".8" fill="{"#f5d46b" if i%2 else "#a68127"}"/>'
    return result + '</g>'

def leaf(x,y,size,angle):
    return f'<g transform="translate({x} {y}) rotate({angle})"><path d="M0 0 Q{-size*.5} {-size*.6} 0 {-size} Q{size*.6} {-size*.45} 0 0" fill="url(#l)"/><path d="M0 0 L0 {-size*.91}" stroke="#d0d5ae" stroke-width=".7" fill="none"/></g>'

body = ''
for i in range(20):
    x = random.randint(110,490)
    y = random.randint(80,310)
    body += f'<path d="M303 505 Q{300+(x-300)*.6} 340 {x} {y}" fill="none" stroke="{random.choice(["#6e8255","#89986b","#a0ac7d"])}" stroke-width="{random.uniform(2,4):.1f}"/>'
    for j in range(3):
        t = .28+j*.2
        lx,ly = 303+(x-303)*t,505+(y-505)*t
        body += leaf(lx,ly,random.randint(42,77), (-50 if i%2 else 50)+(x-300)*.2)
    body += leaf(x,y+25,random.randint(35,65),(x-300)*.5)
for x,y,r,a in [(135,218,32,-25),(453,210,37,16),(181,123,36,5),(370,108,39,12),(470,303,32,22),(119,309,36,-18)]:
    body += flower(x,y,r,True,a)
for x,y,r,a in [(233,152,58,-9),(333,177,61,20),(175,242,59,-20),(406,245,61,15),(279,258,65,9),(227,345,56,-12),(359,337,61,6),(300,94,43,-5)]:
    body += flower(x,y,r,False,a)
body += '<path d="M280 471 L301 523 L349 510 L320 469" fill="#759165"/><path d="M305 479 C215 408 214 506 300 490 C367 408 404 493 318 491" fill="#97a77c" stroke="#698454" stroke-width="2"/><path d="M299 487 Q272 538 245 556 L270 557 L278 576 Q308 533 311 489 M318 486 Q341 535 383 540 L365 553 L367 574 Q318 542 307 489" fill="#8fa376" stroke="#6e875b" stroke-width="1"/><ellipse cx="308" cy="484" rx="15" ry="11" fill="#647f50"/>'
(assets/'bouquet.svg').write_text(svg(body,'0 0 600 620'),encoding='utf-8')
(assets/'daisy.svg').write_text(svg(flower(100,100,78)),encoding='utf-8')
sprig = '<path d="M97 190 Q118 100 92 20" stroke="#71875b" stroke-width="3" fill="none"/>'
for x,y,s,a in [(104,163,52,-50),(107,132,55,50),(107,108,48,-55),(102,78,45,45),(97,48,34,-35)]:
    sprig += leaf(x,y,s,a)
(assets/'sprig.svg').write_text(svg(sprig),encoding='utf-8')
sun = '<g stroke="#c2a34b" stroke-width="3" stroke-linecap="round">'
for i in range(12):
    a=i*pi/6
    sun += f'<path d="M{100+62*cos(a)} {100+62*sin(a)} L{100+79*cos(a)} {100+79*sin(a)}"/>'
sun += '</g><circle cx="100" cy="100" r="43" fill="#efd379"/><path d="M83 108 Q100 125 117 108" stroke="#a18c49" stroke-width="2" fill="none"/><circle cx="85" cy="92" r="2.5" fill="#a18c49"/><circle cx="115" cy="92" r="2.5" fill="#a18c49"/>'
(assets/'sun.svg').write_text(svg(sun),encoding='utf-8')
butterfly='<path d="M100 96 C20 -1 10 115 88 111 C-7 178 114 204 100 106 C198 13 196 119 112 112 C199 168 99 199 104 106" fill="#d6bf6d" stroke="#aa984e" stroke-width="2"/><path d="M92 93 Q47 43 44 78 M111 92 Q155 44 158 79 M87 128 Q47 153 65 159 M117 128 Q155 155 139 158" fill="none" stroke="#ede1a5" stroke-width="5"/><path d="M100 86 Q96 129 103 145 M100 89 Q79 53 80 64 M102 90 Q120 52 120 64" fill="none" stroke="#67794e" stroke-width="4" stroke-linecap="round"/>'
(assets/'butterfly.svg').write_text(svg(butterfly),encoding='utf-8')
lemon='<path d="M47 130 C14 71 111 19 153 64 L163 67 L162 78 C194 144 93 184 55 144 L43 141Z" fill="#efcf63" stroke="#c4a546" stroke-width="2"/><path d="M62 105 Q68 70 105 65" fill="none" stroke="#f9e79f" stroke-width="9" stroke-linecap="round"/>'+leaf(143,68,59,45)
(assets/'lemon.svg').write_text(svg(lemon),encoding='utf-8')
can='<path d="M137 78 C195 65 193 145 143 133" stroke="#6e865b" stroke-width="12" fill="none"/><path d="M54 104 L21 65 L11 78 L58 145" fill="#9bad7c" stroke="#708758" stroke-width="2"/><path d="M51 85 H141 L147 156 Q97 174 48 156Z" fill="#9dae80" stroke="#708758" stroke-width="2"/><ellipse cx="96" cy="85" rx="46" ry="10" fill="#7e9662"/><path d="M18 73 L9 52" stroke="#c5b564" stroke-width="3" stroke-dasharray="3 5"/><path d="M9 78 L-1 64" stroke="#c5b564" stroke-width="3" stroke-dasharray="3 5"/>'+flower(98,124,23)
(assets/'watering-can.svg').write_text(svg(can),encoding='utf-8')
print('Created 7 original botanical SVG assets.')

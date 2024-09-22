const lines = [300, 180, 1040, 180, 1120, 480, 700, 180, 600, 180, 210, 180, 630, 1120, 260, 180]
const r = 30 // 圆弧半径为30
const startHeight = 300 // 起始高度为300
const speed = 10
let currentLine = 300 // 初始值为300
let topScreen: number
let bottomScreen: number
let positionX: number
let positionY: number
const imgSrc = '/DesignMaterials/MovingPlanet.png'
const img = new Image()
img.src = imgSrc

function canDraw(y1: number, y2: number): boolean {
  return !(y2 < topScreen || y1 > bottomScreen)
}

function verticalLine(x: number, y1: number, y2: number, ctx: CanvasRenderingContext2D, canvasH: number) {
  if (currentLine >= y1 && canvasH >= startHeight) {
    if (canDraw(y1, y2)) {
      ctx.moveTo(x, y1)
    }
    if (currentLine > y2) {
      if (canDraw(y1, y2)) {
        ctx.lineTo(x, y2)
        positionX = x
        positionY = y2
      }
    } else if (currentLine < y2) {
      if (canDraw(y1, y2)) {
        ctx.lineTo(x, currentLine)
        positionX = x
        positionY = currentLine
      }
      if (canvasH > currentLine) {
        currentLine += speed
        setTimeout(() => draw(), 5)
      } else if (canvasH < currentLine) {
        currentLine -= speed
        setTimeout(() => draw(), 5)
      }
    } else {
      ctx.lineTo(x, y2)
      positionX = x
      positionY = y2
      if (canvasH < currentLine) {
        currentLine -= speed
      }
    }
  }
}

function circularArc(x: number, y: number, ctx: CanvasRenderingContext2D, canvasH: number, typeID: number, lineID: number) {
  if (typeID == 1) {
    if (currentLine >= y) {
      if (currentLine > y + r) {
        if (canDraw(y - 150, y + 150)) {
          ctx.arc(x, y, r, Math.PI, Math.PI / 2, true)
        }
      } else if (currentLine < y + r) {
        if (canDraw(y - 150, y + 150)) {
          ctx.arc(x, y, r, Math.PI, Math.PI - Math.asin((Math.min(currentLine, y + r) - y) / r), true)
        }
        if (canvasH > currentLine) {
          currentLine += speed
          setTimeout(() => draw(), 5)
        } else if (canvasH < currentLine && lines[lineID] == x) {
          currentLine -= speed
          setTimeout(() => draw(), 5)
        }
      } else {
        if (canDraw(y - 150, y + 150)) {
          ctx.arc(x, y, r, Math.PI, Math.PI / 2, true)
        }
        if (canvasH < currentLine && lines[lineID] == x) {
          currentLine -= speed
        }
      }
    }
  } else if (typeID == 2) {
    if (currentLine >= y - r && lines[lineID] == x) {
      if (currentLine > y) {
        if (canDraw(y - 150, y + 150)) {
          ctx.arc(x, y, r, Math.PI * 1.5, 0, false)
        }
      } else if (currentLine < y) {
        if (canDraw(y - 150, y + 150)) {
          ctx.arc(x, y, r, Math.PI * 1.5, Math.PI * 1.5 + Math.acos((y - currentLine) / r), false)
        }
        if (canvasH > currentLine) {
          currentLine += speed
          setTimeout(() => draw(), 5)
        } else if (canvasH < currentLine) {
          currentLine -= speed
          setTimeout(() => draw(), 5) // 使用箭头函数
        }
      } else {
        if (canDraw(y - 150, y + 150)) {
          ctx.arc(x, y, r, Math.PI * 1.5, 0, false)
        }
        if (canvasH < currentLine) {
          currentLine -= speed
        }
      }
    }
  } else if (typeID == 3) {
    if (currentLine >= y) {
      if (currentLine > y + r) {
        if (canDraw(y - 150, y + 150)) {
          ctx.arc(x, y, r, 0, Math.PI / 2, false)
        }
      } else if (currentLine < y + r) {
        if (canDraw(y - 150, y + 150)) {
          ctx.arc(x, y, r, 0, Math.asin((currentLine - y) / r), false)
        }
        if (canvasH > currentLine) {
          currentLine += speed
          setTimeout(() => draw(), 5) // 使用箭头函数
        } else if (canvasH < currentLine) {
          currentLine -= speed
          setTimeout(() => draw(), 5) // 使用箭头函数
        }
      } else {
        if (canDraw(y - 150, y + 150)) {
          ctx.arc(x, y, r, 0, Math.PI / 2, false)
        }
        if (canvasH < currentLine && lines[lineID] == x) {
          currentLine -= speed
        }
      }
    }
  } else if (typeID == 4) {
    if (currentLine >= y - r && lines[lineID] == x) {
      if (currentLine > y) {
        if (canDraw(y - 150, y + 150)) {
          ctx.arc(x, y, r, Math.PI * 1.5, Math.PI, true)
        }
      } else if (currentLine < y) {
        if (canDraw(y - 150, y + 150)) {
          ctx.arc(x, y, r, Math.PI * 1.5, Math.PI + Math.asin((y - currentLine) / r), true)
        }
        if (canvasH > currentLine) {
          currentLine += speed
          setTimeout(() => draw(), 5)
        } else if (canvasH < currentLine) {
          currentLine -= speed
          setTimeout(() => draw(), 5)
        }
      } else {
        if (canDraw(y - 150, y + 150)) {
          ctx.arc(x, y, r, Math.PI * 1.5, Math.PI, true)
        }
        if (canvasH < currentLine) {
          currentLine -= speed
        }
      }
    }
  }
}

function horizontalLine(x1: number, x2: number, y: number, ctx: CanvasRenderingContext2D, canvasH: number, typeID: number, lineID: number) {
  if (typeID == 1) {
    if (currentLine >= y && canvasH >= y) {
      if (canDraw(y - 150, y + 150)) {
        ctx.moveTo(x1, y)
      }
      if (canDraw(y - 150, y + 150) && x1 != lines[lineID]) {
        ctx.lineTo(lines[lineID], y)
        positionX = lines[lineID]
        positionY = y
      }
      if (lines[lineID] < x2) {
        lines[lineID] += 10
      }
      if (lines[lineID] < x2) {
        setTimeout(() => draw(), 120)
      }
    }
    if (canvasH < y && lines[lineID] > x1 && currentLine == y) {
      if (canDraw(y - 150, y + 150)) {
        ctx.moveTo(x1, y)
      }
      if (canDraw(y - 150, y + 150) && x1 != lines[lineID]) {
        ctx.lineTo(lines[lineID], y)
        positionX = lines[lineID]
        positionY = y
      }
      if (lines[lineID] > x1) {
        lines[lineID] -= 10
      }
      if (lines[lineID] > x1) {
        setTimeout(() => draw(), 80) // 使用箭头函数
      }
    }
  } else if (typeID == 2) { // 向左绘制
    if (currentLine >= y && canvasH >= y) {
      if (canDraw(y - 150, y + 150)) {
        ctx.moveTo(x1, y)
      }
      if (canDraw(y - 150, y + 150) && x1 != lines[lineID]) {
        ctx.lineTo(lines[lineID], y)
        positionX = lines[lineID]
        positionY = y
      }
      if (lines[lineID] > x2) {
        lines[lineID] -= 10
      }
      if (lines[lineID] > x2) {
        setTimeout(() => draw(), 120) // 使用箭头函数
      }
    }
    if (canvasH < y && lines[lineID] < x1 && currentLine == y) {
      if (canDraw(y - 150, y + 150)) {
        ctx.moveTo(x1, y)
      }
      if (canDraw(y - 150, y + 150) && x1 != lines[lineID]) {
        ctx.lineTo(lines[lineID], y)
        positionX = lines[lineID]
        positionY = y
      }
      if (lines[lineID] < x1) {
        lines[lineID] += 10
      }
      if (lines[lineID] < x1) {
        setTimeout(() => draw(), 80) // 使用箭头函数
      }
    }
  }
}

export function draw() {
  const scrTop = document.documentElement.scrollTop
  const canvas = document.getElementById('tutorial') as HTMLCanvasElement
  if (!canvas) {
    return
  }
  canvas.width = 1440
  canvas.height = 10982
  const cvsH = canvas.getBoundingClientRect().top + scrTop
  const curH = document.documentElement.clientHeight / 1.8 + scrTop
  topScreen = Math.floor(-canvas.getBoundingClientRect().top)
  bottomScreen = Math.floor(document.documentElement.clientHeight + scrTop - cvsH)
  let canvasH = Math.floor(curH - cvsH)
  canvasH = canvasH - (canvasH % 10) // 简化的余数处理
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    return
  }
  const gradient = ctx.createLinearGradient(0, 0, 0, 13370)
  gradient.addColorStop(0, '#2B5D6F')
  gradient.addColorStop(0.36, '#2B5D6F')
  gradient.addColorStop(0.373, '#FFFFFF')
  gradient.addColorStop(0.381, '#FFFFFF')
  gradient.addColorStop(0.387, '#15EAEE')
  gradient.addColorStop(0.38, '#15EAEE')
  gradient.addColorStop(0.41, '#2B5D6F')
  gradient.addColorStop(0.53534, '#2B5D6F')
  gradient.addColorStop(0.57648, '#653F05')
  gradient.addColorStop(0.63287, '#653F05')
  gradient.addColorStop(0.68127, '#2B5D6F')
  gradient.addColorStop(1, '#2B5D6F')
  ctx.setLineDash([30, 30]) // 虚线样式 [line length, gap length]
  ctx.strokeStyle = gradient
  ctx.lineWidth = 17
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.beginPath()
  if (canvasH < startHeight) {
    currentLine = startHeight
  }
  verticalLine(330, 300, 450, ctx, canvasH) // 垂直线
  circularArc(300, 450, ctx, canvasH, 3, 0) // 圆弧
  horizontalLine(300, 180, 480, ctx, canvasH, 2, 0) // 水平线
  circularArc(180, 510, ctx, canvasH, 4, 0) // 圆弧
  verticalLine(150, 510, 970, ctx, canvasH) // 垂直线
  circularArc(180, 970, ctx, canvasH, 1, 1) // 圆弧
  horizontalLine(180, 1040, 1000, ctx, canvasH, 1, 1) // 水平线
  circularArc(1040, 1030, ctx, canvasH, 2, 1) // 圆弧
  verticalLine(1070, 1030, 1820, ctx, canvasH) // 垂直线
  circularArc(1040, 1820, ctx, canvasH, 3, 2) // 圆弧
  horizontalLine(1040, 180, 1850, ctx, canvasH, 2, 2) // 水平线
  circularArc(180, 1880, ctx, canvasH, 4, 2) // 圆弧
  verticalLine(150, 1880, 2800, ctx, canvasH) // 垂直线
  circularArc(180, 2800, ctx, canvasH, 1, 3) // 圆弧
  horizontalLine(180, 1120, 2830, ctx, canvasH, 1, 3) // 水平线
  circularArc(1120, 2860, ctx, canvasH, 2, 3) // 圆弧
  verticalLine(1150, 2860, 3250, ctx, canvasH) // 垂直线
  circularArc(1120, 3250, ctx, canvasH, 3, 4) // 圆弧
  horizontalLine(1120, 260, 3280, ctx, canvasH, 2, 4) // 水平线
  circularArc(260, 3310, ctx, canvasH, 4, 4) // 圆弧
  verticalLine(230, 3310, 4620, ctx, canvasH) // 垂直线
  circularArc(260, 4620, ctx, canvasH, 1, 14) // 圆弧
  horizontalLine(260, 420, 4650, ctx, canvasH, 1, 14) // 水平线
  circularArc(420, 4680, ctx, canvasH, 2, 14) // 圆弧
  verticalLine(450, 4680, 5070, ctx, canvasH) // 垂直线
  circularArc(480, 5070, ctx, canvasH, 1, 5) // 圆弧
  horizontalLine(480, 700, 5100, ctx, canvasH, 1, 5) // 水平线
  circularArc(700, 5130, ctx, canvasH, 2, 5) // 圆弧
  verticalLine(730, 5130, 6330, ctx, canvasH) // 垂直线
  circularArc(700, 6330, ctx, canvasH, 3, 6) // 圆弧
  horizontalLine(700, 180, 6360, ctx, canvasH, 2, 6) // 水平线
  circularArc(180, 6390, ctx, canvasH, 4, 6) // 圆弧
  verticalLine(150, 6390, 6570, ctx, canvasH) // 垂直线
  circularArc(180, 6570, ctx, canvasH, 1, 7) // 圆弧
  horizontalLine(180, 600, 6600, ctx, canvasH, 1, 7) // 水平线
  circularArc(600, 6630, ctx, canvasH, 2, 7) // 圆弧
  verticalLine(630, 6630, 6840, ctx, canvasH) // 垂直线
  ctx.drawImage(img, positionX - img.width / 2, positionY - img.height / 2)
  ctx.stroke()
  canvas.style.backgroundColor = 'transparent'
}

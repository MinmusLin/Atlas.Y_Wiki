const lines = [300, 180, 1040, 180, 1120, 480, 700, 180, 600, 180, 210, 180, 630, 1120, 260, 180]
const r = 30 // 圆弧半径为30
const startHeight = 850 // 起始高度为300
const speed = 5
let currentLine = 850 // 初始值为300
let topScreen: number
let bottomScreen: number
let positionX: number
let positionY: number
const imgSrc = '/DesignMaterials/MovingPlanet.png'
const img = new Image()
img.src = imgSrc
const imgWidth = 75
const imgHeight = 75

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
        setTimeout(() => draw(), 20)
      } else if (canvasH < currentLine) {
        currentLine -= speed
        setTimeout(() => draw(), 20)
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
          setTimeout(() => draw(), 50)
        } else if (canvasH < currentLine && lines[lineID] == x) {
          currentLine -= speed
          setTimeout(() => draw(), 50)
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
          setTimeout(() => draw(), 50)
        } else if (canvasH < currentLine) {
          currentLine -= speed
          setTimeout(() => draw(), 50) // 使用箭头函数
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
          setTimeout(() => draw(), 50) // 使用箭头函数
        } else if (canvasH < currentLine) {
          currentLine -= speed
          setTimeout(() => draw(), 50) // 使用箭头函数
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
          setTimeout(() => draw(), 50)
        } else if (canvasH < currentLine) {
          currentLine -= speed
          setTimeout(() => draw(), 50)
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
        setTimeout(() => draw(), 100) // 使用箭头函数
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
        setTimeout(() => draw(), 100) // 使用箭头函数
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
  gradient.addColorStop(0, '#FFFFFF')
  gradient.addColorStop(0.23, '#FFFFFF')
  gradient.addColorStop(0.24, '#2F62D7')
  gradient.addColorStop(1, '#2F62D7')
  ctx.setLineDash([10, 18]) // 虚线样式 [line length, gap length]
  ctx.strokeStyle = gradient
  ctx.lineWidth = 3
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.beginPath()
  if (canvasH < startHeight) {
    currentLine = startHeight
  }
  verticalLine(230, 850, 1500, ctx, canvasH) // 垂直线
  circularArc(260, 1500, ctx, canvasH, 1, 0) // 圆弧
  horizontalLine(260, 1200, 1530, ctx, canvasH, 1, 0) // 水平线
  circularArc(1200, 1560, ctx, canvasH, 2, 0) // 圆弧
  verticalLine(1230, 1560, 4080, ctx, canvasH) // 垂直线
  circularArc(1200, 4080, ctx, canvasH, 3, 1) // 圆弧
  horizontalLine(1200, 150, 4110, ctx, canvasH, 2, 1) // 水平线
  circularArc(150, 4140, ctx, canvasH, 4, 1) // 圆弧
  verticalLine(120, 4140, 5700, ctx, canvasH) // 垂直线
  circularArc(150, 5700, ctx, canvasH, 1, 2) // 圆弧
  horizontalLine(150, 1220, 5730, ctx, canvasH, 1, 2) // 水平线
  circularArc(1220, 5760, ctx, canvasH, 2, 2) // 圆弧
  verticalLine(1250, 5760, 7100, ctx, canvasH) // 垂直线

  if (positionY < 3200) {
    img.src = '/DesignMaterials/MovingPlanet.png';  // 小行星
  } else if (positionY >= 3200 && positionY < 5700) {
    img.src = '/DesignMaterials/MovingCell.png';  // 小细胞
  } else {
    img.src = '/DesignMaterials/MovingProtein.png'; // 小蛋白质
  }

  ctx.drawImage(img, positionX - imgWidth / 2, positionY - imgHeight / 2, imgWidth, imgHeight)
  ctx.stroke()
  canvas.style.backgroundColor = 'transparent'
}

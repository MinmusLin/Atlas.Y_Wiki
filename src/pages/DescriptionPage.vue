<template>
  <div class="homepage-holder">
    <canvas id="tutorial"></canvas>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, onBeforeUnmount } from 'vue';

let current_line = 300; // 初始值为300
let lines = [300, 180, 1040, 180, 1120, 480, 700, 180, 600, 180, 210, 180, 630, 1120, 260, 180];
let r = 30; // 圆弧半径为30
let start_height = 300; // 起始高度为300
let speed = 10;
let top_screen: number;
let bottom_screen: number;

function canDraw(y1: number, y2: number): boolean {
  if (y2 < top_screen || y1 > bottom_screen) return false;
  else return true;
}

function verticalLine(x: number, y1: number, y2: number, ctx: CanvasRenderingContext2D, canvas_h: number) {
  if (current_line >= y1 && canvas_h >= start_height) {
    // 开始在 (x, y1) 处移动画笔
    if (canDraw(y1, y2)) ctx.moveTo(x, y1);

    // 如果 current_line 超过了 y2，则绘制到 (x, y2)
    if (current_line > y2) {
      if (canDraw(y1, y2)) ctx.lineTo(x, y2);
    }
    // 如果 current_line 小于 y2，则动态绘制
    else if (current_line < y2) {
      if (canDraw(y1, y2)) ctx.lineTo(x, current_line);

      // 判断当前显示区域是否还在绘制区域内
      if (canvas_h > current_line) {
        current_line += speed; // 增加 current_line 实现动画效果
        setTimeout(() => draw(), 5); // 使用箭头函数确保上下文一致性
      } else if (canvas_h < current_line) {
        current_line -= speed; // 减少 current_line，实现向上滚动效果
        setTimeout(() => draw(), 5); // 使用箭头函数
      }
    }
    // current_line 与 y2 重合，直接绘制到 y2
    else {
      ctx.lineTo(x, y2);
      if (canvas_h < current_line) {
        current_line -= speed; // 回滚时减少 current_line
      }
    }
  }
}


// 其他函数如 circularArc 和 horizontalLine 保持不变
function circularArc(x: number, y: number, ctx: CanvasRenderingContext2D, canvas_h: number, typeID: number, lineID: number) {
  if (typeID === 1) {
    if (current_line >= y) {
      if (current_line > y + r) {
        if (canDraw(y - 150, y + 150)) ctx.arc(x, y, r, Math.PI, Math.PI / 2, true);
      } else if (current_line < y + r) {
        if (canDraw(y - 150, y + 150)) ctx.arc(x, y, r, Math.PI, Math.PI - Math.asin((Math.min(current_line, y + r) - y) / r), true);
        if (canvas_h > current_line) {
          current_line += speed;
          setTimeout(() => draw(), 5); // 使用箭头函数
        } else if (canvas_h < current_line && lines[lineID] === x) {
          current_line -= speed;
          setTimeout(() => draw(), 5); // 使用箭头函数
        }
      } else {
        if (canDraw(y - 150, y + 150)) ctx.arc(x, y, r, Math.PI, Math.PI / 2, true);
        if (canvas_h < current_line && lines[lineID] === x) {
          current_line -= speed;
        }
      }
    }
  } else if (typeID === 2) {
    if (current_line >= y - r && lines[lineID] === x) {
      if (current_line > y) {
        if (canDraw(y - 150, y + 150)) ctx.arc(x, y, r, Math.PI * 1.5, 0, false);
      } else if (current_line < y) {
        if (canDraw(y - 150, y + 150)) ctx.arc(x, y, r, Math.PI * 1.5, Math.PI * 1.5 + Math.acos((y - current_line) / r), false);
        if (canvas_h > current_line) {
          current_line += speed;
          setTimeout(() => draw(), 5); // 使用箭头函数
        } else if (canvas_h < current_line) {
          current_line -= speed;
          setTimeout(() => draw(), 5); // 使用箭头函数
        }
      } else {
        if (canDraw(y - 150, y + 150)) ctx.arc(x, y, r, Math.PI * 1.5, 0, false);
        if (canvas_h < current_line) {
          current_line -= speed;
        }
      }
    }
  } else if (typeID === 3) {
    if (current_line >= y) {
      if (current_line > y + r) {
        if (canDraw(y - 150, y + 150)) ctx.arc(x, y, r, 0, Math.PI / 2, false);
      } else if (current_line < y + r) {
        if (canDraw(y - 150, y + 150)) ctx.arc(x, y, r, 0, Math.asin((current_line - y) / r), false);
        if (canvas_h > current_line) {
          current_line += speed;
          setTimeout(() => draw(), 5); // 使用箭头函数
        } else if (canvas_h < current_line) {
          current_line -= speed;
          setTimeout(() => draw(), 5); // 使用箭头函数
        }
      } else {
        if (canDraw(y - 150, y + 150)) ctx.arc(x, y, r, 0, Math.PI / 2, false);
        if (canvas_h < current_line && lines[lineID] === x) {
          current_line -= speed;
        }
      }
    }
  } else if (typeID === 4) {
    if (current_line >= y - r && lines[lineID] === x) {
      if (current_line > y) {
        if (canDraw(y - 150, y + 150)) ctx.arc(x, y, r, Math.PI * 1.5, Math.PI, true);
      } else if (current_line < y) {
        if (canDraw(y - 150, y + 150)) ctx.arc(x, y, r, Math.PI * 1.5, Math.PI + Math.asin((y - current_line) / r), true);
        if (canvas_h > current_line) {
          current_line += speed;
          setTimeout(() => draw(), 5); // 使用箭头函数
        } else if (canvas_h < current_line) {
          current_line -= speed;
          setTimeout(() => draw(), 5); // 使用箭头函数
        }
      } else {
        if (canDraw(y - 150, y + 150)) ctx.arc(x, y, r, Math.PI * 1.5, Math.PI, true);
        if (canvas_h < current_line) {
          current_line -= speed;
        }
      }
    }
  }
}

function horizontalLine(x1: number, x2: number, y: number, ctx: CanvasRenderingContext2D, canvas_h: number, typeID: number, lineID: number) {
  if (typeID === 1) { // 向右绘制
    if (current_line >= y && canvas_h >= y) {
      if (canDraw(y - 150, y + 150)) ctx.moveTo(x1, y);
      if (canDraw(y - 150, y + 150) && x1 !== lines[lineID]) ctx.lineTo(lines[lineID], y);
      if (lines[lineID] < x2) {
        lines[lineID] += 10;
      }
      if (lines[lineID] < x2) {
        setTimeout(() => draw(), 120); // 使用箭头函数
      }
    }
    if (canvas_h < y && lines[lineID] > x1 && current_line === y) {
      if (canDraw(y - 150, y + 150)) ctx.moveTo(x1, y);
      if (canDraw(y - 150, y + 150) && x1 !== lines[lineID]) ctx.lineTo(lines[lineID], y);
      if (lines[lineID] > x1) {
        lines[lineID] -= 10;
      }
      if (lines[lineID] > x1) {
        setTimeout(() => draw(), 80); // 使用箭头函数
      }
    }
  } else if (typeID === 2) { // 向左绘制
    if (current_line >= y && canvas_h >= y) {
      if (canDraw(y - 150, y + 150)) ctx.moveTo(x1, y);
      if (canDraw(y - 150, y + 150) && x1 !== lines[lineID]) ctx.lineTo(lines[lineID], y);
      if (lines[lineID] > x2) {
        lines[lineID] -= 10;
      }
      if (lines[lineID] > x2) {
        setTimeout(() => draw(), 120); // 使用箭头函数
      }
    }
    if (canvas_h < y && lines[lineID] < x1 && current_line === y) {
      if (canDraw(y - 150, y + 150)) ctx.moveTo(x1, y);
      if (canDraw(y - 150, y + 150) && x1 !== lines[lineID]) ctx.lineTo(lines[lineID], y);
      if (lines[lineID] < x1) {
        lines[lineID] += 10;
      }
      if (lines[lineID] < x1) {
        setTimeout(() => draw(), 80); // 使用箭头函数
      }
    }
  }
}


function draw() {
  let scrTop = document.documentElement.scrollTop;
  const canvas = document.getElementById("tutorial") as HTMLCanvasElement;
  if (!canvas) return;

  canvas.width = 1300;
  canvas.height = 13600;
  let cvs_h = canvas.getBoundingClientRect().top + scrTop;
  let cur_h = document.documentElement.clientHeight / 1.8 + scrTop;
  top_screen = Math.floor(-canvas.getBoundingClientRect().top);
  bottom_screen = Math.floor(document.documentElement.clientHeight + scrTop - cvs_h);
  let canvas_h = Math.floor(cur_h - cvs_h);

  canvas_h = canvas_h - (canvas_h % 10); // 简化的余数处理

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  var gradient = ctx.createLinearGradient(0, 0, 0, 13370);
  gradient.addColorStop(0, "#2B5D6F");
  gradient.addColorStop(0.36, "#2B5D6F");
  gradient.addColorStop(0.373, "#FFFFFF");
  gradient.addColorStop(0.381, "#FFFFFF");
  gradient.addColorStop(0.387, "#15EAEE");
  gradient.addColorStop(0.38, "#15EAEE");
  gradient.addColorStop(0.41, "#2B5D6F");
  gradient.addColorStop(0.53534, "#2B5D6F");
  gradient.addColorStop(0.57648, "#653F05");
  gradient.addColorStop(0.63287, "#653F05");
  gradient.addColorStop(0.68127, "#2B5D6F");
  gradient.addColorStop(1, "#2B5D6F");

  ctx.strokeStyle = gradient;
  ctx.lineWidth = 17;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();

  if (canvas_h < start_height) {
    current_line = start_height;
  }

  // 开始绘制路径
  verticalLine(330, 300, 450, ctx, canvas_h); // 垂直线
  circularArc(300, 450, ctx, canvas_h, 3, 0); // 圆弧
  horizontalLine(300, 180, 480, ctx, canvas_h, 2, 0); // 水平线
  circularArc(180, 510, ctx, canvas_h, 4, 0); // 圆弧
  verticalLine(150, 510, 970, ctx, canvas_h); // 垂直线
  circularArc(180, 970, ctx, canvas_h, 1, 1); // 圆弧
  horizontalLine(180, 1040, 1000, ctx, canvas_h, 1, 1); // 水平线
  circularArc(1040, 1030, ctx, canvas_h, 2, 1); // 圆弧
  verticalLine(1070, 1030, 1820, ctx, canvas_h); // 垂直线
  circularArc(1040, 1820, ctx, canvas_h, 3, 2); // 圆弧
  horizontalLine(1040, 180, 1850, ctx, canvas_h, 2, 2); // 水平线
  circularArc(180, 1880, ctx, canvas_h, 4, 2); // 圆弧
  verticalLine(150, 1880, 2800, ctx, canvas_h); // 垂直线
  circularArc(180, 2800, ctx, canvas_h, 1, 3); // 圆弧
  horizontalLine(180, 1120, 2830, ctx, canvas_h, 1, 3); // 水平线
  circularArc(1120, 2860, ctx, canvas_h, 2, 3); // 圆弧
  verticalLine(1150, 2860, 3250, ctx, canvas_h); // 垂直线
  circularArc(1120, 3250, ctx, canvas_h, 3, 4); // 圆弧
  horizontalLine(1120, 260, 3280, ctx, canvas_h, 2, 4); // 水平线
  circularArc(260, 3310, ctx, canvas_h, 4, 4); // 圆弧
  verticalLine(230, 3310, 4620, ctx, canvas_h); // 垂直线
  circularArc(260, 4620, ctx, canvas_h, 1, 14); // 圆弧
  horizontalLine(260, 420, 4650, ctx, canvas_h, 1, 14); // 水平线
  circularArc(420, 4680, ctx, canvas_h, 2, 14); // 圆弧
  verticalLine(450, 4680, 5070, ctx, canvas_h); // 垂直线
  circularArc(480, 5070, ctx, canvas_h, 1, 5); // 圆弧
  horizontalLine(480, 700, 5100, ctx, canvas_h, 1, 5); // 水平线
  circularArc(700, 5130, ctx, canvas_h, 2, 5); // 圆弧
  verticalLine(730, 5130, 6330, ctx, canvas_h); // 垂直线
  circularArc(700, 6330, ctx, canvas_h, 3, 6); // 圆弧
  horizontalLine(700, 180, 6360, ctx, canvas_h, 2, 6); // 水平线
  circularArc(180, 6390, ctx, canvas_h, 4, 6); // 圆弧
  verticalLine(150, 6390, 6570, ctx, canvas_h); // 垂直线
  circularArc(180, 6570, ctx, canvas_h, 1, 7); // 圆弧
  horizontalLine(180, 600, 6600, ctx, canvas_h, 1, 7); // 水平线
  circularArc(600, 6630, ctx, canvas_h, 2, 7); // 圆弧
  verticalLine(630, 6630, 6840, ctx, canvas_h); // 垂直线
  circularArc(600, 6840, ctx, canvas_h, 3, 8); // 圆弧
  horizontalLine(600, 180, 6870, ctx, canvas_h, 2, 8); // 水平线
  circularArc(180, 6900, ctx, canvas_h, 4, 8); // 圆弧
  verticalLine(150, 6900, 7760, ctx, canvas_h); // 垂直线
  circularArc(180, 7760, ctx, canvas_h, 1, 9); // 圆弧
  horizontalLine(180, 210, 7790, ctx, canvas_h, 1, 9); // 水平线
  circularArc(210, 7820, ctx, canvas_h, 2, 9); // 圆弧
  verticalLine(240, 7820, 9890, ctx, canvas_h); // 垂直线
  circularArc(210, 9890, ctx, canvas_h, 3, 10); // 圆弧
  horizontalLine(210, 180, 9920, ctx, canvas_h, 2, 10); // 水平线
  circularArc(180, 9950, ctx, canvas_h, 4, 10); // 圆弧
  verticalLine(150, 9950, 10790, ctx, canvas_h); // 垂直线
  circularArc(180, 10790, ctx, canvas_h, 1, 11); // 圆弧
  horizontalLine(180, 570, 10820, ctx, canvas_h, 1, 11); // 水平线
  circularArc(570, 10850, ctx, canvas_h, 2, 11); // 圆弧
  verticalLine(600, 10850, 11380, ctx, canvas_h); // 垂直线
  circularArc(630, 11380, ctx, canvas_h, 1, 12); // 圆弧
  horizontalLine(630, 1120, 11410, ctx, canvas_h, 1, 12); // 水平线
  circularArc(1120, 11440, ctx, canvas_h, 2, 12); // 圆弧
  verticalLine(1150, 11440, 12020, ctx, canvas_h); // 垂直线
  circularArc(1120, 12020, ctx, canvas_h, 3, 13); // 圆弧
  horizontalLine(1120, 180, 12050, ctx, canvas_h, 2, 13); // 水平线
  circularArc(180, 12080, ctx, canvas_h, 4, 13); // 圆弧
  verticalLine(150, 12080, 12470, ctx, canvas_h); // 垂直线
  circularArc(180, 12470, ctx, canvas_h, 1, 15); // 圆弧
  horizontalLine(180, 620, 12500, ctx, canvas_h, 1, 15); // 水平线
  circularArc(620, 12530, ctx, canvas_h, 2, 15); // 圆弧
  verticalLine(650, 12530, 13500, ctx, canvas_h); // 垂直线

  ctx.stroke(); // 执行绘制
  canvas.style.backgroundColor = "transparent";
}


onMounted(() => {
  draw();
  window.addEventListener('scroll', draw);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', draw);
});
</script>

<style scoped>
#tutorial {
  position: absolute;
  z-index: 5;
  top: 700px;
}

.homepage-holder {
  margin: 0 auto;
  width: max(100%, 1300px);
  height: 14500px;
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: space-around;
}
</style>

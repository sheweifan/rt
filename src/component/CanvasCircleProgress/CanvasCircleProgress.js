/* @flow */
import React, { Component } from 'react'

const drawCircle = function(canvas: HTMLCanvasElement, percent: number): void {
  const context = canvas.getContext('2d'),
  centerX = canvas.width/2,
  centerY = canvas.height/2,
  rad = Math.PI*2/100,
  lineW = canvas.width/10

  function circle(n:number): void {
      context.save()
      context.strokeStyle = "#ff5d3d"
      context.lineWidth = 3
      context.beginPath()
      context.arc(centerX, centerY, centerX-lineW , -Math.PI/2, -Math.PI/2 +n*rad, false)
      context.stroke()
      context.closePath()
      context.restore()
  }

  function bgCircle(): void {
      context.save()
      context.beginPath()
      context.strokeStyle = "#ebebeb"
      context.lineWidth = 3
      context.arc(centerX, centerY, centerX-lineW , 0, Math.PI*2, false)
      context.stroke()
      context.closePath()
      context.restore()
  }

  function font(): void {
    const fontSize = canvas.width/4
    context.fillStyle = '#ff5d3d'
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.font = `${fontSize}px Microsoft YaHei`
    context.fillText(`${percent}%`, centerX, centerY)
  }

  function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    bgCircle()
    circle(percent)
    font()
  }

  draw()
}

type propType = {
  className: string,
  size: number,
  percent: number
}

class CanvasCircleProgress extends Component <propType, any> {
  canvas: ?HTMLCanvasElement
  static defaultProps = {
    size: 60,
    className: ''
  }
  componentDidMount() {
    const { size, percent } = this.props
    let canvas = this.canvas
    if (canvas) {
      canvas.width = size
      canvas.height = size
      drawCircle(canvas, percent)
    }
  }
  render() {
    return (
      <canvas
        className={this.props.className}
        ref={(canvas) => this.canvas = canvas}
      ></canvas>
    )
  }
}

export default CanvasCircleProgress

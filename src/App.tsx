import * as React from 'react'
import './App.css'

// import { Circle } from './Circle'

class App extends React.Component<{}, { angle: number }> {
    node: HTMLCanvasElement
    c: CanvasRenderingContext2D
    frame: number

    state = { angle: 0 }

    update = () => {
        const { c } = this
        const angle = this.frame++
        if (!c) return

        for (let i = 0; i <= 15; i++) {
            for (let j = 0; j <= 15; j++) {
                const top = 50 + Math.sin(angle - j) * 48
                const left = 50 + Math.cos(angle / i) * 48

                c.fillRect(left + 100 * j, top + 100 * i, 1, 1)
            }
        }
        this.setState({ angle })
    }

    componentDidMount() {
        this.frame = 0
        this.c.fillStyle = 'red'
        this.update()
    }

    componentDidUpdate() {
        requestAnimationFrame(this.update)
    }

    public render() {
        const { angle } = this.state
        return (
            <div className="App">
                {angle}
                <br />
                {/* <Circle angle={angle / 100} />
                <Circle angle={angle / 99} />
                <Circle angle={angle / 90} />
                <Circle angle={angle / 80} />
                <Circle angle={angle / 70} />
                <Circle angle={angle / 60} />
                <Circle angle={angle / 50} />
                <Circle angle={angle / 40} />
                <Circle angle={angle / 30} />
                <Circle angle={angle / 20} />
                <Circle angle={angle / 10} /> */}
                <canvas
                    width="800"
                    height="1500"
                    ref={n => {
                        if (n) {
                            this.node = n
                            this.c = n.getContext('2d')!
                        }
                    }}
                />
            </div>
        )
    }
}

export default App

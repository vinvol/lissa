import * as React from 'react'

interface CircleProps {
    readonly angle: number
}

export class Circle extends React.Component<CircleProps> {
    public render() {
        const { angle } = this.props
        const top = 50 + Math.sin(angle) * 50
        const left = 50 + Math.cos(angle) * 50

        return (
            <div
                style={{
                    display: 'inline-block',
                    position: 'relative',
                    height: 100,
                    width: 100,
                    border: '2px red solid',
                    borderRadius: '50%',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        transform: `translate(${top}px, ${left}px)`,
                        top: 0,
                        left: 0,
                        height: 10,
                        width: 10,
                        border: '2px blue solid',
                        borderRadius: '50%',
                    }}
                />
            </div>
        )
    }
}

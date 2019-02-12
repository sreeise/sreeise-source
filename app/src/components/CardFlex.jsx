import React from 'react';

class CardFlex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
        }
    }

    componentDidMount() {
        this.setState({
            cards: this.props.cards
        });
    }

    render() {
        return (
            <div>
                <main className={"container"}>
                    <section className={"cards"}>
                        {this.state.cards.map((card) => {
                            return (
                                <div>{card}</div>
                            )
                        })}
                    </section>
                </main>
            </div>
        );
    }
}


export default CardFlex;
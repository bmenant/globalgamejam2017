import React, { Component } from 'react';

import styles from './Start.css';

export default class Start extends Component {
    constructor(props) {
        super(props);
        this.state = {channel: null};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({channel: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.startGame(this.state.channel);
    }

    render() {
        return (
            <div className={ styles.base }>
                <div className={ styles.logo } />

                <form className={ styles.form } onSubmit={this.handleSubmit}>

                    <label className={ styles.container } htmlFor="input-field">
                        <h1 className={ styles.title }>
                            Create your room and play with your friends:
                        </h1>
                    </label>

                    <input
                        id="input-field"
                        required
                        className={ styles.input }
                        onChange={this.handleChange}
                        type="text"
                        placeholder="e.g. “global-game-jam”" />

                    <button className={ styles.playButton } type="submit">
                        Play!
                    </button>
                </form>
            </div>
        );
    }
}

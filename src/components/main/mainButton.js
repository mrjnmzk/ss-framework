import React from 'react';
import styles from './main.module.css';

function ViewContent(props) {
    if (!props.content) {
      return null;
    }
  
    return (
      <div className={styles.content}>
        Competitive Prices on More Than 100 Million Items. Discover Products Online Now! Promotions on clothing, electronics, sports and more. Check out all the deals! Buyer Protection. Delivery track online. Safe Payment. Up to 40% discount. Full order protection.
        Competitive Prices on More Than 100 Million Items. Discover Products Online Now! Promotions on clothing, electronics, sports and more. Check out all the deals! Buyer Protection. Delivery track online. Safe Payment. Up to 40% discount. Full order protection.

      </div>
    );
  }
  
  export default class MainButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {show: false}
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleClick() {
      this.setState(prevState => ({
        show: !prevState.show
      }));
    }
    
    render() {
      return (
        <div className={styles.main_button}>
          <ViewContent content={this.state.show} />
          <button className={styles.button} onClick={this.handleToggleClick}>
            {this.state.show ? 'Hide' : 'View More'}
          </button>
        </div>
      );
    }
  }
  
import React from 'react';
import API from '../API';
import LinkStore from '../stores/LinkStore';

let _getAppState = () => {
  // read links directly from the store
  return { links: LinkStore.getAll() };
}

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = _getAppState();
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    API.fetchLinks();
    // register in store
    LinkStore.on('change', this.onChange);
  }
  componentWillUnmount() {
    // unregister
    LinkStore.removeListener('change', this.onChange);
  }
  onChange() {
    console.log('4. In the View');
    this.setState(_getAppState());
  }
  render() {
    return (
      <div>
        <h3>Links</h3>
        <ul>
          <li>Link ...</li>
          <li>Link ...</li>
        </ul>
      </div>
    );
  }
}

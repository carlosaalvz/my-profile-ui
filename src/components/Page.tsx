import React from 'react';
import './Page.scss';
import {Component} from 'react';

interface PageProps {}

export class Page extends Component<PageProps> {
    render() {
        return <div className='page'>{this.props.children}</div>
    }
}
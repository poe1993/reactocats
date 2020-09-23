import React, { Component } from 'react'

export class Octocat extends Component {
  render() {
    return (
      <article>
        <a href={this.props.ref}>
          <img
            src={this.props.image}
            width="400"
            height="400"
            alt={this.props.alt}
          />
        </a>
        <ul>
          <li>
            {this.props.number}:
            <a href={this.props.ref}>
              <h1>{this.props.name}</h1>
            </a>
          </li>
          <li>
            <a href={this.props.uref}>
              <img
                src={this.props.creator}
                width="24px"
                height="24px"
                alt={this.props.creatoralt}
              />
            </a>
          </li>
        </ul>
      </article>
    )
  }
}

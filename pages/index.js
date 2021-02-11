import React, { Component } from 'react';
import { Buttons } from 'components/Buttons/Buttons.js';

export default class Index extends Component {
  render() {
    return (
      <div>
        <div className="flex mb-10">
          <Buttons color="teal-500" size="sm" text="BUTTON" />
          <Buttons color="teal-500" text="BUTTON" />
          <Buttons color="teal-500" size="lg" text="BUTTON" />
        </div>

        <div className="flex mb-10">
          <Buttons color="teal-500" type="outline" size="sm" text="BUTTON" />
          <Buttons color="teal-500" type="outline" text="BUTTON" />
          <Buttons color="teal-500" type="outline" size="lg" text="BUTTON" />
        </div>

        <div className="flex mb-10">
          <Buttons color="teal-500" size="sm" text="BUTTON" rounded />
          <Buttons color="teal-500" text="BUTTON" rounded />
          <Buttons color="teal-500" size="lg" text="BUTTON" rounded />
        </div>

        <div className="flex mb-10">
          <Buttons
            color="teal-500"
            type="outline"
            size="sm"
            text="BUTTON"
            rounded
          />
          <Buttons color="teal-500" type="outline" text="BUTTON" rounded />
          <Buttons
            color="teal-500"
            type="outline"
            size="lg"
            text="BUTTON"
            rounded
          />
        </div>

        <div className="flex mb-10">
          <Buttons color="teal-500" type="link" size="sm" text="BUTTON" />
          <Buttons color="teal-500" type="link" text="BUTTON" />
          <Buttons color="teal-500" type="link" size="lg" text="BUTTON" />
        </div>

        <div className="flex mb-10">
          <Buttons color="teal-500" size="sm" icon="favorite" text="BUTTON" />
          <Buttons color="teal-500" icon="favorite" text="BUTTON" />
          <Buttons color="teal-500" size="lg" icon="favorite" text="BUTTON" />
        </div>

        <div className="flex mb-10">
          <Buttons
            color="teal-500"
            type="outline"
            size="sm"
            icon="favorite"
            text="BUTTON"
          />
          <Buttons
            color="teal-500"
            type="outline"
            icon="favorite"
            text="BUTTON"
          />
          <Buttons
            color="teal-500"
            type="outline"
            size="lg"
            icon="favorite"
            text="BUTTON"
          />
        </div>

        <div className="flex mb-10">
          <Buttons
            color="teal-500"
            type="link"
            size="sm"
            icon="favorite"
            text="BUTTON"
          />
          <Buttons color="teal-500" type="link" icon="favorite" text="BUTTON" />
          <Buttons
            color="teal-500"
            type="link"
            size="lg"
            icon="favorite"
            text="BUTTON"
          />
        </div>

        <div className="flex mb-10">
          <Buttons color="teal-500" size="sm" icon="favorite" />
          <Buttons color="teal-500" icon="favorite" />
          <Buttons color="teal-500" size="lg" icon="favorite" />
        </div>

        <div className="flex mb-10">
          <Buttons color="teal-500" type="outline" size="sm" icon="favorite" />
          <Buttons color="teal-500" type="outline" icon="favorite" />
          <Buttons color="teal-500" type="outline" size="lg" icon="favorite" />
        </div>

        <div className="flex mb-10">
          <Buttons color="teal-500" type="link" size="sm" icon="favorite" />
          <Buttons color="teal-500" type="link" icon="favorite" />
          <Buttons color="teal-500" type="link" size="lg" icon="favorite" />
        </div>
      </div>
    );
  }
}

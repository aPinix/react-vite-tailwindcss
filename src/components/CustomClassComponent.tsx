import React from 'react';

interface Props {
  title: string;
  description?: string;
  cls?: string;
}

interface State {
  message: string;
}

class CustomClassComponent extends React.Component<Props, State> {
  componentType = 'Class Component';

  constructor(props: Props) {
    super(props);

    this.state = {
      message: 'Loading...',
    };
  }

  componentDidMount() {
    this.setState({
      message: 'Hello!',
    });
  }

  render() {
    return (
      <>
        <div className="flex flex-col gap-3 rounded-xl p-6 text-slate-500 shadow-xl">
          <div className={`flex gap-2 text-xl font-bold ${this.props.cls}`}>
            <span>{this.componentType}</span>
            <span>{this.props.cls ? '(cls)' : ''}</span>
          </div>
          <hr />
          {this.state.message && (
            <div className="flex gap-2">
              <span className="font-bold">State "message":</span>
              <span>{this.state.message}</span>
            </div>
          )}
          {this.props.title && (
            <div className="flex gap-2">
              <span className="font-bold">Props "title":</span>
              <span>{this.props.title}</span>
            </div>
          )}
          {this.props.description && (
            <div className="flex gap-2">
              <span className="font-bold">Props "description":</span>
              <span>{this.props.description}</span>
            </div>
          )}
          {!this.props.description && (
            <div className="flex gap-2">
              <span className="text-slate-400 line-through">No description</span>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default CustomClassComponent;

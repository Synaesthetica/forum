import * as React from 'react';

interface IFormState {
    tableName: string
};

interface IFormProps {
    formTitle: string
}

class TableForm extends React.Component<IFormProps, IFormState> {
    constructor(props: IFormProps) {
        super(props);
        this.state = { tableName: "" };
    }

    public render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>{this.props.formTitle}</label>
                <input id="table-name" type="text" value={this.state.tableName} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }

    private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert("This would submit");
    }

    private handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        this.setState({tableName: event.currentTarget.value}, () => alert(this.state.tableName));
    }
};

export default TableForm;
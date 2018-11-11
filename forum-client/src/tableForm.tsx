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

    private handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const res = await fetch(`/table/create`, {
            body: JSON.stringify({"tableName": this.state.tableName}),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            method: "POST",
        });
        const status = await res.json();
        alert(JSON.stringify(status));
    }

    private handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        this.setState({tableName: event.currentTarget.value});
    }
};

export default TableForm;
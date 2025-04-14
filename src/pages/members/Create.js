import Layout from "../Layout";

export default function Create() {

    return (
        <Layout>
            <>
                <h1 className="h3 mb-3">Basic Inputs</h1>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="card card-custom mb-3">
                            <form className="form-custom">
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" />
                                </div>
                            </form>

                        </div>
                        <div className="card card-custom mb-3">
                            <form className="form-custom">
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Example
                                        textarea</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1"
                                        rows="3"></textarea>
                                </div>
                            </form>
                        </div>

                        <div className="card card-custom mb-3">
                            <div className="card-header">
                                <h5 className="">Checkboxes</h5>
                            </div>
                            <div className="card-body p-0">
                                <form className="form-custom">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""
                                            id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Option one is this and that&mdash;be sure to include why it's great
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""
                                            id="flexCheckChecked" disabled />
                                        <label className="form-check-label" for="flexCheckChecked">
                                            Option two is disabled
                                        </label>
                                    </div>

                                    <div className="form-check form-check-inline ">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                            value="option1" />
                                        <label className="form-check-label" for="inlineCheckbox1">1</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2"
                                            value="option2" />
                                        <label className="form-check-label" for="inlineCheckbox2">2</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3"
                                            value="option3" disabled />
                                        <label className="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="card card-custom mb-3">
                            <div className="card-header">
                                <h5 className="card-title mb-0">Custom selects</h5>
                            </div>
                            <div className="card-body">
                                <select className="form-select mb-3" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>

                                <select className="form-select" aria-label="Disabled select example" disabled>
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>

                            </div>
                        </div>

                        <div className="card card-custom">
                            <div className="card-header">
                                <h5 className="card-title mb-0">Sizes</h5>
                            </div>
                            <div className="card-body">
                                <input className="form-control form-control-lg mb-3" type="text"
                                    placeholder=".form-control-lg" aria-label=".form-control-lg example" />
                                <input className="form-control mb-3" type="text" placeholder="Default input"
                                    aria-label="default input example" />
                                <input className="form-control mb-3 form-control-sm" type="text"
                                    placeholder=".form-control-sm" aria-label=".form-control-sm example" />
                                <input className="form-control mb-3" type="text" placeholder="Disabled input"
                                    aria-label="Disabled input example" disabled />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </Layout>
    );
}
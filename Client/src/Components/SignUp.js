import React from 'react'

function SignUp() {
    return (
        <div className="container">
            <div className="row text-center">
                <p className='display-5'>
                    Create Account
                </p>
                <div class="card offset-md-4 col-4">
                    <div class="card-body">
                        <form class="row g-3">
                            <div class="col-md-12">
                                <label for="inputEmail4" class="form-label">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" />
                            </div>
                            <div class="col-md-12">
                                <label for="inputPassword4" class="form-label">Password</label>
                                <input type="password" class="form-control" id="inputPassword4" />
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Create Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
import { Component } from "react"
import {
	Button,
	Card,
	Container,
	Col,
	Form,
	FormControl,
	Row,
} from "react-bootstrap"


// let array = [1, 2, 3]
// console.log('array.filter', array.filter(element => { return element === 3 }))

export default class Feed extends Component {
	state = {
		postInput: "",
		posts: [],
		posted: 0,
		postFile: null
	}

	componentDidMount = async () => {
		const headers = {
			Authorization: "Bearer " + this.props.token,
		}
		try {
			const response = await fetch(
				"https://striveschool-api.herokuapp.com/api/posts/",
				{
					headers,
				}
			)
			if (response.ok) {
				const posts = await response.json()
				this.setState({ posts: posts })
			}
		} catch (error) {
			console.log("You have an error fetching:", error)
		}

	}

	handleSubmit = async () => {
		const postInput = { text: this.state.postInput }
		let headers = {
			Authorization: "Bearer " + this.props.token,
			"Content-Type": "application/json",
		}
		try {
			const response = await fetch(
				"https://striveschool-api.herokuapp.com/api/posts/",
				{
					method: "POST",
					body: JSON.stringify(postInput),
					headers,
				}
			)
			const post = await response.json()
			console.log(post)
		} catch (error) {
			console.log("You have an error posting:", error)
		}
		this.componentDidMount()
		if (this.state.postFile) {
			var myHeaders = new Headers();
			myHeaders.append("Authorization", "Bearer " + this.props.token);

			const myPosts = this.state.posts.slice(-100).filter(element => element.user._id === this.props.user._id)
			const myLastPostId = myPosts.slice(-1)[0]._id
			console.log('myLastPost:', myLastPostId)

			var formdata = new FormData();
			formdata.append("post", this.state.postFile);
			console.log('formdata.getAll:', formdata.getAll('post'))
			var requestOptions = {
				method: 'POST',
				headers: myHeaders,
				body: formdata,
				redirect: 'follow'
			};
			
			fetch(`https://striveschool-api.herokuapp.com/api/posts/${myLastPostId}`, requestOptions)
				.then(response => response.text())
				.then(result => console.log(result))
				.catch(error => console.log('error', error));
		}
	}
	handleDelete = async (e) => {
		console.log(e.target.value)
		const headers = {
			Authorization: "Bearer " + this.props.token,
			"Content-Type": "application/json",
		}
		try {
			const response = await fetch(
				"https://striveschool-api.herokuapp.com/api/posts/" + e.target.value,
				{
					method: "DELETE",
					headers,
				}
			)
			const post = await response.json()
			console.log(post)
		} catch (error) {
			console.log("You have an error posting:", error)
		}
		this.componentDidMount()
	}
	getposts = (e) => {
		this.setState({ postInput: e.target.value })
	}

	render() {
		return (
			<Container className="my-3">
				<Row>
					<Col className="col-3">
						<Card>
							<img
								alt=""
								src="https://static-exp1.licdn.com/sc/h/9e0ckeb27mzi70ne80f4hv7il"
							></img>
							<img
								className="d-inline-block"
								src={this.props.user.image}
								style={{
									borderRadius: "90px",
									top: "20px",
									left: "10px",
									position: "absolute",
									border: "1px solid lightgrey",
								}}
								width="35px"
								alt="profile"
							/>
							<Card.Body>
								<Card.Title>
									{this.props.user.name} {this.props.user.surname}
								</Card.Title>
								<Card.Text>{this.props.user.title}</Card.Text>
							</Card.Body>
							<Card.Footer>
								<small className="text-muted">Last updated 2 mins ago</small>
							</Card.Footer>
						</Card>
					</Col>
					<Col className="col-9">
						<Card>
							<Card.Body>
								<Card.Text>
									<Row>
										<Col className="col-1">
											<img
												className="d-inline-block"
												src={this.props.user.image}
												style={{
													borderRadius: "90px",
													marginRight: "5px",
												}}
												width="50px"
												alt="profile"
											/>
										</Col>
										<Col className="col-9">
											<div
												className="d-inline-block px-3 pb-3 align-items-center"
												style={{
													width: "100%",
												}}
											>
												<Form
													style={{
														width: "100%",
													}}
												>
													<FormControl
														style={{
															height: "48px",
															width: "100%",
															borderRadius: "35px",
														}}
														type="text"
														placeholder="Start a post"
														className="mr-sm-2"
														onChange={this.getposts}
													/>

												</Form>
											</div>
										</Col>
									</Row>
								</Card.Text>
								<div
									style={{
										width: "80%",
										display: "flex",
										justifyContent: "space-evenly",
										alignItems: 'center'
									}}
								>
									<Button
										className="mx-2 bg-white btn-outline"
										variant="light"
										onClick={this.handleSubmit}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="#e7a33e"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon>
											<line x1="3" y1="22" x2="21" y2="22"></line>
										</svg> Post
									</Button>

									<label for="input-picture" className="btn btn-outline mx-2 bg-white text-dark border-0">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="#70b5f9"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<rect x="3" y="3" width="18" height="18" rx="2" />
											<circle cx="8.5" cy="8.5" r="1.5" />
											<path d="M20.4 14.5L16 10 4 20" />
										</svg> Photo
									</label>
									<input onChange={e => {
										this.setState({ postFile: e.target.files[0] })
										console.log('e.target.files:', e.target.files[0])
									}}
										type="file"
										id="input-picture"
										style={{ display: 'none' }}
									/>

									<Button className="mx-2 bg-white" variant="light">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											data-supported-dps="24x24"
											fill="rgb(127, 193, 94)"
											width="24"
											height="24"
											focusable="false"
										>
											<path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
										</svg> Video
									</Button>
									<Button className="mx-2 bg-white" variant="light">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="rgb(231, 163, 62)" class="mercado-match" width="24" height="24" focusable="false">
											<path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
										</svg>
										 Event
									</Button>
									<Button className="mx-2 bg-white" variant="light">
										<svg xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24" data-supported-dps="24x24"
											fill="rgb(245, 152, 126)"
											width="24"
											height="24"
											focusable="false">
											<path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
										</svg> Write article
									</Button>
								</div>
							</Card.Body>
						</Card>
						<br />
						{this.state.posts
							.slice(-10)
							.reverse()
							.map((post) => (
								<Card key={post._id} className="my-2">
									<Col xs={12} className="p-0 mb-4 section-outer">
										<div
											style={{ padding: "12px 12px 0px 12px" }}
											className="d-flex"
										>
											<img
												style={{ width: "48px", height: "48px" }}
												src={post.user.image}
												alt="postuserimage"
											/>
											<div className="ms-2 d-flex flex-column">
												<b className="ml-2">{post.user.name}</b>
												<span className="text-muted ml-2">
													{post.username} •
													<span title={post.user.area}>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 16 16"
															data-supported-dps="16x16"
															fill="currentColor"
															className="ml-2"
															width="16"
															height="16"
															focusable="false"
														>
															<path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
														</svg>
													</span>
												</span>
											</div>
										</div>

										<div
											style={{
												// display: "inline-block",
												// padding: "12px 12px 0px 12px",
											}}
										>
											<div
												style={{
													display: "inline-block",
													padding: "12px 12px 12px 12px",
												}}
											>
												{post.text}
											</div>
											{/* <div className="text-center" > */}
											<img
												className="img-fluid rounded mx-auto px-5 d-block"
												// style={{ width: "48px", height: "48px" }}
												src={post.image}
												alt=""
											/>
											{/* </div> */}
										</div>

										<div style={{ objectFit: "contain" }}></div>

										<div style={{ padding: "12px 12px 0px 12px" }}>
											<img
												src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
												alt="LIKE"
											></img>
											<span className="text-muted"> 0 · 0 comments </span>
										</div>

										<div style={{ padding: "0px 12px 0px 12px" }}>
											<hr></hr>
										</div>

										{/* interaction buttons  */}

										<div className="mb-3 d-flex px-3">
											<div className="d-flex align-items-center">
												<Button variant="light" className="mx-2 text-muted">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														data-supported-dps="24x24"
														fill="currentColor"
														className="mercado-match"
														width="24"
														height="24"
														focusable="false"
													>
														<path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
													</svg>
													Like
												</Button>
											</div>

											<div className="d-flex align-items-center">
												<Button variant="light" className="mx-2 text-muted">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														data-supported-dps="24x24"
														fill="currentColor"
														className="mercado-match"
														width="24"
														height="24"
														focusable="false"
													>
														<path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
													</svg>
													Comment
												</Button>
											</div>

											<div className="d-flex align-items-center">
												<Button variant="light" className="mx-2 text-muted ">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														data-supported-dps="24x24"
														fill="currentColor"
														className="mercado-match"
														width="24"
														height="24"
														focusable="false"
													>
														<path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
													</svg>
													Share
												</Button>
											</div>

											<div className="d-flex align-items-center">
												<Button
													value={post._id}
													// onClick={this.handleDelete}
													variant="light"
													className="mx-2 text-muted"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														data-supported-dps="24x24"
														fill="currentColor"
														className="mercado-match"
														width="24"
														height="24"
														focusable="false"
													>
														<path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
													</svg>
													Send
												</Button>
											</div>
											<div className="d-flex align-items-center">
												<Button
													value={post._id}
													onClick={this.handleDelete}
													variant="light"
													className="mx-2 text-muted"
												>
													
													Delete
												</Button>
											</div>
										</div>
									</Col>
								</Card>
							))}
					</Col>
					<Col className="col-2"></Col>
				</Row>
			</Container >
		)
	}
}

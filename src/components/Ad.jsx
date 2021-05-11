import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';


export default class Ad extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Card className="text-center">
                {/* Ad */}
                {/* <Card.Img variant="top" src="https://via.placeholder.com/800x250" alt="800x250" className="img-fluid" /> */}
                <div className="mt-2">

                        <img src="https://via.placeholder.com/60x60" alt="60x60" style={{borderRadius:"50%", marginRight:"10px"}}/>
                    <a href="https://www.linkedin.com/csp/cat?v=1&amp;action=click&amp;trk=CwEAAAF5WrT21sBFPbipmutd2Nx3BRf7g-8y3zMxqlKdTQxDbgfBZb9SZuKnuW2qPzId0cZsDBGvhOSISCThL4S7jipeHlUXin-5jdJLSA75l4io5Jiey5XbQSCr421O8qfVXPG1f9ycFz7F3ZHBA1ZxbJUqCOSKkd6GLBxc1QTmDXWz4oA7A3j7M6ORJkSA_4-d5O_6YFMuTASvMX6pizGCIfrQFey6eCmKFV2Twr2Am07X-0PTo6ozes3zNw8bBll66F7Fu7OdRC045IzD8K2guldHCv39Iie-tv69eyvAU3gHzRYV9DYouxhBKAJxDUQaw3aW4ecBEqz6MZdr9XM8V5caq6Ba6k5D6c4ZQT6p2u3Q0FnvlK3G-OEPRN8u_tpaDL167ta339t7-bRMyaJE65aF_hmpIotLwF08LgntAmMA_deDQTNXsOKfHlMFy-dm-7qwH5FtJu3LhbLscOyOaQ05daU4UKEsfOZRhfLecSMZ9WsMSx8d3otRV2-B4hI3gtf-jb2_gV29V1vT7k7crFMx4cVpRkxGStr7tTqfX15YjZwZqMnqPQhAie5jc_PTfkdReb-mhF_bXQAaIS8uOgt0GWNWQyhJidg_htdqJY8oZeZTY4m27eL2jd5lOe1zBwyUnfy0vunXrzUAlEP0z39D63tA2KQU7wxMHWD0oP0d9bV6K-9mexaMS5UUwk58u9jHmJsH-c70rWid7sJ5Brqn5ZB-Gyv5HogvnczuMohAosNrYr5mEIp68VOKEtVZNC_oPI8fZbholH9wYa2Ac3iIuQetjItub-0p7S145FTRq4Z8O0slbJHQYx4RNtTV9A4_OtXKhwb97g1jVK813zGs9m7YsfxF2wd2M_r-8-koLBlQfvhf0kNMdtu2rxWX4pORckualI1wBz5SILX90M5mUFYw7nSETm2dIL1r4310H11RHGT1mmHyiFfd4_Tf9a-9nyqdLat6FLhMh4tXXyDEGdSuef7rReidzpiryPi7Pz_bwLAX0pfyFq8vmcVPXQHurwkAgcBfSZjGzt_6Mmd8sUv7GEvQ03c1OC5mwPxLNRPVpmwh7b1HLNhvb1RsLP9OPq9-6EXjAq2X-tkpvx43GSy7nLKmQqu-GgUgnLvQXvKWjmekRspPOTWsTJ6NRzIO88hrQQESP7KsW-4hI0FkvhgxPYBx8t_b8FKlZV8Z54NRkgUWiv2DG-CjifaWL0wtjHQj0uIkQTJG6TxtfoBLIgM-T3mShmxysx8ZU8oI7Kb0dl3TRoNKoOrYVbI5d9i2nrWtZfJpZVUTx7Ad3XiFkAji_xh8LAwAiay6bqbM90n0LGhb-Br9vYZ5MxB80SpfccdpzTHZgHTTHcUDwNURhTwMxwL78S-eJF9aSnOcgcbdRnjtlJm7vZLCap0rlwpB60K7Ye3FGWLAzGPeyUDa-H5FKg5ChvCDj8XDt2diI11D9uzIpV-DWGmskjHhG87PUyd4wcOFsrdNOiMuUn_1IkaQqCiJwEbJFfRQMYUaGwHsSdvOR4dY3alLA-TXejOC1nPOM14BRcyc2ZEXK_Rv_bfRj6dfkDIX42iqtq3YaU1u&amp;pageKey=d_flagship3_profile_view_base" className="da-card-creative__entity-image" title="Vestas">
                        <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQE8iQ4qOFTRxg/company-logo_100_100/0/1543248876609?e=1628726400&amp;v=beta&amp;t=ZR3ld-2jZv-SaGH4UICw5IjtuQxDOkhGJa4PBcmysmE" alt="Vestas" />
                    </a>
                </div>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                        Keep Learning in the moments that matter
          </Card.Text>
                    <Button variant="outline-primary" className="">Get started today</Button>
                </Card.Body>
            </Card>
        );
    }
}
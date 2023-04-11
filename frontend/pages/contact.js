import Head from 'next/head';
import styles from '@/styles/contact.module.css'
const Contact = () => {
    return (
        <>
            <Head>
                <title>Forked from - Material Design Blocks - Contact 13</title>
                <link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
                <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;display=swap" />
                <link rel="stylesheet" type="text/css" href="https://mdbootstrap.com/api/snippets/static/download/MDB-Pro_4.20.0/css/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" href="https://mdbootstrap.com/api/snippets/static/download/MDB-Pro_4.20.0/css/mdb.min.css" />
                <link rel="stylesheet" type="text/css" href="https://mdbootstrap.com/wp-content/themes/mdbootstrap4/docs-app/css/compiled-addons-4.20.0.min.css" />
                <link rel="stylesheet" type="text/css" href="https://mdbootstrap.com/wp-content/themes/mdbootstrap4/css/mdb-plugins-gathered.min.css" />
                <script type="text/javascript" src="https://mdbootstrap.com/api/snippets/static/download/MDB-Pro_4.20.0/js/jquery.min.js" />
                <script type="text/javascript" src="https://mdbootstrap.com/api/snippets/static/download/MDB-Pro_4.20.0/js/popper.min.js" />
                <script type="text/javascript" src="https://mdbootstrap.com/api/snippets/static/download/MDB-Pro_4.20.0/js/bootstrap.min.js" />
                <script type="text/javascript" src="https://mdbootstrap.com/api/snippets/static/download/MDB-Pro_4.20.0/js/mdb.min.js" />

                <script type="text/javascript" src="https://mdbootstrap.com/wp-content/themes/mdbootstrap4/docs-app/js/bundles/4.20.0/compiled-addons.min.js" />

                <script type="text/javascript" src="https://mdbootstrap.com/wp-content/themes/mdbootstrap4/js/plugins/mdb-plugins-gathered.min.js" />
            </Head>

            <section class="container my-4 contact-section dark-grey-text mb-5">

                {/* <!-- Form with header --> */}
                <div class="card">

                    {/* <!-- Grid row --> */}
                    <div class="row">

                        {/* <!-- Grid column --> */}
                        <div class="col-lg-8">

                            <div class="card-body form">

                                {/* <!-- Header --> */}
                                <h3 class="font-weight-bold dark-grey-text mt-4"><i class="fas fa-envelope pr-2 mr-1"></i>Write to us:</h3>

                                {/* <!-- Grid row --> */}
                                <div class="row">

                                    {/* <!-- Grid column --> */}
                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                            <input type="text" id="form-contact-name" class="form-control" />
                                            <label for="form-contact-name" class="">Your name</label>
                                        </div>
                                    </div>
                                    {/* <!-- Grid column --> */}

                                    {/* <!-- Grid column --> */}
                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                            <input type="text" id="form-contact-email" class="form-control" />
                                            <label for="form-contact-email" class="">Your email</label>
                                        </div>
                                    </div>
                                    {/* <!-- Grid column --> */}

                                </div>
                                {/* <!-- Grid row --> */}

                                {/* <!-- Grid row --> */}
                                <div class="row">

                                    {/* <!-- Grid column --> */}
                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                            <input type="text" id="form-contact-phone" class="form-control" />
                                            <label htmlFor="form-contact-phone" class="">Your phone</label>
                                        </div>
                                    </div>
                                    {/* <!-- Grid column --> */}

                                    {/* <!-- Grid column --> */}
                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                            <input type="text" id="form-contact-company" class="form-control" />
                                            <label for="form-contact-company" class="">Your company</label>
                                        </div>
                                    </div>
                                    {/* <!-- Grid column --> */}

                                </div>
                                {/* <!-- Grid row --> */}

                                {/* <!-- Grid row --> */}
                                <div class="row">

                                    {/* <!-- Grid column --> */}
                                    <div class="col-md-12">
                                        <div class="md-form mb-0">
                                            <textarea id="form-contact-message" class="form-control md-textarea" rows="3"></textarea>
                                            <label for="form-contact-message">Your message</label>
                                            <a class="btn-floating btn-lg blue">
                                                <i class="far fa-paper-plane"></i>
                                            </a>
                                        </div>
                                    </div>
                                    {/* <!-- Grid column --> */}

                                </div>
                                {/* <!-- Grid row --> */}

                            </div>

                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div class="col-lg-4">

                            <div class={`card-body contact text-center h-100 white-text ${styles.contact_info}`}>

                                <h3 class="font-weight-bold my-4 pb-2">Contact information</h3>
                                <ul class="text-lg-left list-unstyled ml-4">
                                    <li>
                                        <p><i class="fas fa-map-marker-alt pr-2"></i>New York, 94126, USA</p>
                                    </li>
                                    <li>
                                        <p><i class="fas fa-phone pr-2"></i>+ 01 234 567 89</p>
                                    </li>
                                    <li>
                                        <p><i class="fas fa-envelope pr-2"></i>contact@example.com</p>
                                    </li>
                                </ul>
                                <hr class="hr-light my-4" />
                                <ul class="list-inline text-center list-unstyled">
                                    <li class="list-inline-item">
                                        <a class="p-2 fa-lg tw-ic">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="p-2 fa-lg li-ic">
                                            <i class="fab fa-linkedin-in"> </i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="p-2 fa-lg ins-ic">
                                            <i class="fab fa-instagram"> </i>
                                        </a>
                                    </li>
                                </ul>

                            </div>

                        </div>
                        {/* <!-- Grid column --> */}

                    </div>
                    {/* <!-- Grid row --> */}

                </div>
                {/* <!-- Form with header --> */}

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14882.599389412366!2d72.7668041078125!3d21.1663287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dec8b56fdf3%3A0x423b99085d26d1f9!2sSardar%20Vallabhbhai%20National%20Institute%20of%20Technology%2C%20SVNIT.!5e0!3m2!1sen!2sin!4v1681235855011!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={`my-4 ${styles.map}`} />
            </section>
            {/* <!--Section: Content--> */}

        </>
    )
}
export default Contact;
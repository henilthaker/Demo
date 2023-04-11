import Head from 'next/head';
import styles from '@/styles/Features.module.css'
const Features = () => {
    const showMoreLess = (e) => {
        const clicked_btn = e.target;
        if (clicked_btn.textContent === "Show More")
            clicked_btn.textContent = "Show Less";
        else if (clicked_btn.textContent === "Show Less")
            clicked_btn.textContent = "Show More";
        const cur_para = clicked_btn.previousElementSibling.getElementsByClassName('card-text')[0];
        console.log(cur_para);
        cur_para.classList.toggle(`${styles.show_more}`);
    }
    const nums = [1, 2, 3, 4];
    return (
        <>
            <Head>
                <title>Infodrive | Features</title>
            </Head>
            <div className={`bg-light ${styles.main}`}>
                <div className="container my-4">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            nums.map(num => {
                                return (
                                    <div className="col">
                                        <div className={`card ${styles.card}`}>
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className={`card-text ${styles.card_para}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, assumenda asperiores quaerat molestias, commodi ipsum dignissimos, vero temporibus modi quas maiores quibusdam voluptates provident eum? Alias non blanditiis deserunt sapiente atque officia mollitia possimus, natus quisquam corporis odit, et explicabo dolores molestiae nobis consequatur enim, a sit commodi accusamus illo.</p>
                                            </div>
                                            <button onClick={showMoreLess} className={styles.card_btn}>Show More</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <br />
            </div>
        </>
    )
}
export default Features;
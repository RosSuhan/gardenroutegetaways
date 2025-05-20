import Styles from "@/app/(home)/home.module.css"
import ManageHero from "@/components/Hero/ManageHero"
import ManageForm from "@/components/Form/ManageForm"
import Content from "./Content"
import Review from "@/components/Reviews/page"

export default function ManagePage(){
    return(
        <main
            className={Styles.main}
        >
            <ManageHero/>

            <Content/>

            <Review/>

            <section
                className={Styles.manageFormSection}
            >
                <ManageForm/>
            </section>
        </main>
    )
}
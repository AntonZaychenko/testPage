import { Hero } from "./Hero/Hero"
import { OurWorks } from "./OurWorks/OurWorks"
import { StandartsDevelopment } from "./StandardsDevelopment/StandardsDevelopment"
import { Specialize } from "./Specialize/Specialize"
import { Projects } from "./Projects/Projects"
import { Video } from "./Video/Video"
import { Form } from "./Form/Form"
export const Main = () => {
    return (
        <main>
            <Hero/>
            <OurWorks/>
            <StandartsDevelopment/>
            <Specialize/>
            <Projects/>
            <Video/>
            <Form/>
        </main>
    )
}
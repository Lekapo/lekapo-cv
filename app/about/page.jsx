import { Container } from '@/components'

export default function About() {
    return(
        <div id='about' className='container m-auto mt-10'>
          <Container height={"min-h-[50vh]"} width={"w-2/5"} title={"About"}>
            <h1>About</h1>
          </Container>
        </div>
    )
}
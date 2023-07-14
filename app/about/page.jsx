import { Container } from '@/components'

export default function About() {
    return(
        <div id='about' className='container m-auto mt-10'>
          <Container 
            height={"min-h-[50vh]"}
            title={"About"}
            topBar={true}
          >
            <h1>About</h1>
          </Container>
        </div>
    )
}
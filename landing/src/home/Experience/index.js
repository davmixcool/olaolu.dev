import Vue from 'vue'
import { mapState } from 'vuex'
import StyledExperience from './styles'
import { OlaoluWorkIllo } from '@/assets'
import { CURRENT_SECTION } from '@/constants'

const Experience = Vue.component('Experience', {
  computed: mapState([CURRENT_SECTION]),

  render() {
    const isVisible = this.currentSection === 'trois'

    return (
      <StyledExperience name={this.name}>
        <div class="inner-content">
          <Cavalier
            theme="lime"
            heading={`Over the <br /> past ${new Date().getFullYear() -
              2011} years,`}
          >
            <p slot="text">
              I've built products for companies and businesses around the globe
              ranging from basic websites to complex solutions and enterprise
              apps with focus on fast, elegant and accessible user experiences.
            </p>

            <p slot="text">
              Most recently, I was Principal Frontend Software Engineer at
              hellotax crafting a suite of tools and services tailored at
              providing robust and fast VAT Registration &amp; Returns solutions
              for all kinds of traders across Europe.
            </p>

            <p slot="text">
              Before then, I was a Senior frontend engineering contractor with
              Pixel2HTML building JavaScript applications and interfaces for
              orgs and individuals.
            </p>

            <p slot="text">
              I once also led the frontend team at a Russian startup, Conectar
              through building multiple React applications into a single
              powerful online learning platform.
            </p>

            <p slot="text">
              I'm now available for contracts and remote full-time roles. Want
              us to work together? You should{' '}
              <a
                href={`mailto:hello@olaolu.dev?subject=${encodeURI(
                  "💡Let's Work Together on Project X"
                )}`}
              >
                contact me
              </a>
              .
            </p>
          </Cavalier>

          <figure class="work-illo" aria-hidden={!isVisible}>
            <OlaoluWorkIllo />
            <figcaption class="visuallyhidden">
              Illustration of Olaolu and cardboards of some of his work.
            </figcaption>
          </figure>
        </div>
      </StyledExperience>
    )
  },
  props: ['name'],
})

export default Experience

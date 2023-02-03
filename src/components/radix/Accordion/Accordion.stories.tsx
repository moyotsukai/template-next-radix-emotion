import Accordion from '.'

export default {
  title: 'Accordion',
  component: Accordion,
}

export const AccordionExample = () => (
  <Accordion.Root type="multiple">
    <Accordion.Item value="item-1">
      <Accordion.Trigger>
        Trigger
      </Accordion.Trigger>
      <Accordion.Content>
        <p>contentcontentcontentcontentcontent</p>
        <p>contentcontentcontentcontent</p>
        <p>contentcontentcontentcontent</p>
        <p>contentcontentcontentcontentcontent</p>
        <p>contentcontentcontentcontentcontent</p>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
)
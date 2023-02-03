import Accordion from "../components/radix/Accordion"
import Spacer from "../components/ui/Spacer"

const Home: React.FC = () => {
  return (
    <div>
      <Spacer size={30} />
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
    </div>
  )
}

export default Home
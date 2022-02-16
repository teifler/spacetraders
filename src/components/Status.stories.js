import Status from './Status.js'

export default {
  title: 'Components/Status',
  component: Status,
  decorators: [
    Story => (
      <div>
        <GlobalStyles />
        <Story />
      </div>
    ),
  ],
}
//Bespiele du du anzeigen willst returnt eine status der komponentse
export const stateGreen = () => <Status isGreen />
export const stateRed = () => <Status />

//Unter welchem namen soll es angezeigt werden stateGreen state red

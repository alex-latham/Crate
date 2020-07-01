/* code-annotations-areid:
  Imports the List object, along with it's state/properties
  Allows list of crates to be displayed
*/
// App Imports
import List from '../../modules/crate/List'


/* code-annotations-areid:
  Creates route to specific create from list above. 
*/
// Crate routes
export default {
  list: {
    path: '/crates',
    component: List,
    auth: true
  }
}

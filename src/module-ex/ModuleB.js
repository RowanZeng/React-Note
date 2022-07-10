import { foo, abc } from './ModuleA'
import fooDefault from './DefaultModuleA'

function ModuleB() {
  return (
    <>
      {foo()}
      {fooDefault()}
      {abc}
    </>
  )
}
export default ModuleB

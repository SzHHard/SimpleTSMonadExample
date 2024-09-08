import http from 'http'
import { testMaybe } from './monads/Maybe/testMaybe'
import { testEither } from './monads/Either/testEither'
import { testIdentity } from './monads/Identity/testIdentity'

http.createServer(function () {}).listen()

testMaybe()
testEither()
testIdentity()

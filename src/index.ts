import http from 'http'
import { testMaybe } from './monads/Maybe/testMaybe'
import { testEither } from './monads/Either/testEither'

http.createServer(function () {}).listen()

testMaybe()
testEither()

import {describe, expect, it} from '@jest/globals'
import checkDependencies from '../src/check_dependencies'
import {DuplicateDependencyError} from '../src/errors'
import get_test_file_names from '../src/utils'

describe('Test invalid duplicate dependencies', () => {
    for (const filePath of get_test_file_names('tests/invalid_duplicate_dependencies')) {
        it(`${filePath} should throw InvalidDependencyError`, () => {
            expect(() => checkDependencies(filePath)).toThrow(DuplicateDependencyError)
        })
    }
})

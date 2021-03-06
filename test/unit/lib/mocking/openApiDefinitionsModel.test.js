'use strict'

const OpenApiDefinitionsModel = require('../../../../src/lib/mocking/openApiDefinitionsModel')

describe('OpenApiDefinitionsModel', () => {
  describe('getApiDefinitions', () => {
    it('Result must contain the required properties', async () => {
      const result = await OpenApiDefinitionsModel.getApiDefinitions()
      expect(Array.isArray(result)).toBe(true)
      expect(result.length).toBeGreaterThan(0)
      expect(result[0]).toHaveProperty('majorVersion')
      expect(result[0]).toHaveProperty('minorVersion')
      expect(result[0]).toHaveProperty('specFile')
    })
  })
})

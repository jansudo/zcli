import { expect } from 'chai'
import * as sinon from 'sinon'
import { displayEarlyAccessWarning } from './display'

describe('displayEarlyAccessWarning', () => {
  let logSpy: sinon.SinonSpy

  beforeEach(() => {
    logSpy = sinon.spy()
  })

  afterEach(() => {
    sinon.restore()
  })

  it('should call the log function with the early access warning banner', () => {
    displayEarlyAccessWarning(logSpy)

    expect(logSpy.callCount).to.equal(6)
  })

  it('should display the warning banner with correct messages', () => {
    displayEarlyAccessWarning(logSpy)

    const calls = logSpy.getCalls().map((call) => call.args[0])
    expect(calls[0]).to.include('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    expect(calls[1]).to.include('EARLY ACCESS FEATURE')
    expect(calls[2]).to.include('Connector development tools are in early access and available to limited users.')
    expect(calls[3]).to.include('Features may change without notice.')
    expect(calls[4]).to.include('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    expect(calls[5]).to.equal('')
  })
})

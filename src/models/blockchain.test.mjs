import { beforeEach, expect } from "vitest"
import Blockchain from "./Blockchain.mjs";

describe('Blockchain', () => {
    let blockchain;

    beforeEach(() => {
        blockchain = new Blockchain();
    })

  describe('has the correct properties', () => {
    it('should be a instanceOf Array', () => {
        expect(blockchain.chain instanceof(Array)).toBeTruthy();
    })
  })
  
})

import { expect } from "chai";
import hre from "hardhat";
import { time, loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers.js";

describe("AITU2329modif", function () {
  async function deployAITU2329modifFixture() {
    const [owner, otherAccount] = await hre.ethers.getSigners();
    
    const initialValue = 10000;  
    const aitu2329modif = await hre.ethers.deployContract("AITU2329modif", [owner.address, initialValue]);

    return { aitu2329modif, owner, otherAccount, initialValue };
  }

  it("Should deploy with the correct initial supply", async function () {
    const { aitu2329modif, owner, initialValue } = await loadFixture(deployAITU2329modifFixture);

    const ownerBalance = await aitu2329modif.balanceOf(owner.address);
    expect(ownerBalance).to.equal(BigInt(initialValue) * BigInt(10) ** BigInt(18)); 
  });

  it("Should emit TransactionDetails event", async function () {
    const { aitu2329modif, owner, otherAccount } = await loadFixture(deployAITU2329modifFixture);

    const amount = 1000;
    const tx = await aitu2329modif.getTransactionDetails(owner.address, otherAccount.address, amount);

    await expect(tx)
      .to.emit(aitu2329modif, "TransactionDetails")
      .withArgs(owner.address, otherAccount.address, amount, await time.latest());
  });

  it("Should return the latest transaction timestamp as a string", async function () {
    const { aitu2329modif } = await loadFixture(deployAITU2329modifFixture);

    const timestamp = await time.latest();
    const expectedTimestampString = `Timestamp: ${timestamp}`;

    expect(await aitu2329modif.getLatestTransactionTimestamp()).to.equal(expectedTimestampString);
  });

  it("Should return the transaction sender", async function () {
    const { aitu2329modif, owner } = await loadFixture(deployAITU2329modifFixture);

    expect(await aitu2329modif.getTransactionSender()).to.equal(owner.address);
  });

  it("Should return the transaction receiver", async function () {
    const { aitu2329modif, otherAccount } = await loadFixture(deployAITU2329modifFixture);

    const receiver = otherAccount.address;
    expect(await aitu2329modif.getTransactionReceiver(receiver)).to.equal(receiver);
  });

  it("Should store the correct initialValue", async function () {
    const { aitu2329modif, initialValue } = await loadFixture(deployAITU2329modifFixture);

    const storedInitialValue = await aitu2329modif.initialValue();
    expect(storedInitialValue).to.equal(initialValue);
  });
});

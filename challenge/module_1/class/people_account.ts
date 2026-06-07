import { CompanyAccount } from "./company_account"

class PeopleAccount extends CompanyAccount {
  private doc_id: number
  constructor(name: string, accountNumber: number, doc_id: number) {
    super(name, accountNumber)
    this.doc_id = doc_id
  }

}

class SpecialAccount extends PeopleAccount {
  constructor(name: string, accountNumber: number, doc_id: number) {
    super(name, accountNumber, doc_id)
  }

  override deposit = () => {
    this.validateStatus()
    this.balance = this.balance + 10
  }


}

const peopleaccount: PeopleAccount = new PeopleAccount("Nath", 1, 372839)

peopleaccount.deposit(100)
peopleaccount.getBalance()
peopleaccount.withdraw(33)
peopleaccount.getBalance()
peopleaccount.getLoan(50)
peopleaccount.getBalance()

const special_account: SpecialAccount = new SpecialAccount("João", 1, 372839)

console.log(special_account.getName())
special_account.deposit()
special_account.getBalance()

peopleaccount.desableAccount()
// peopleaccount.deposit(100)
// peopleaccount.getBalance()
// peopleaccount.withdraw(33)
// peopleaccount.getBalance()
// peopleaccount.getLoan(50)
// peopleaccount.getBalance()
special_account.desableAccount()
special_account.deposit()


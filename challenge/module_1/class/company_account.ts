import { DioAccount } from "./dio_accout"

export abstract class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    this.validateStatus()

    if (value <= 0) {
      throw new Error("Valor do emprestimo tem que ser maior que 0")
    }

    this.balance = this.balance + value

    console.log("Você pegou um empréstimo")
  }

  // override deposit = (): void => { console.log("A empresa depositou") }

}

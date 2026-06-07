export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  protected balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log("Nome alterado com sucesso!")
  }

  getName = (): string => this.name

  desableAccount = (): void => {
    this.status = false

    console.log("Conta encerrada")
  }

  deposit = (value: number): void => {
    this.validateStatus()

    if (value <= 0) { throw new Error("Valor do deposito deve ser maior que 0.") }

    this.balance = this.balance + value

    console.log("Deposito realizado com sucesso!")

  }

  withdraw = (value: number): void => {
    this.validateStatus()

    if (value <= 0) { throw new Error("Valor do saque deve ser maior que zero.") }

    if (value > this.balance) { throw new Error("O valor do saque não pode ser maior que o saldo da conta.") }

    this.balance = this.balance - value

    console.log("Saque realizado com sucesso.")
  }


  getBalance = (): void => { console.log(this.balance) }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    } else {
      throw new Error("Conta invalida")
    }

  }

}


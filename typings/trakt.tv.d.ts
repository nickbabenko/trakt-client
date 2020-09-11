declare module "trakt.tv" {
  interface Options {
    client_id: string
    client_secret: string
    redirect_uri?: string
    api_url?: string
    useragent?: string
    pagination?: boolean
  }

  export default class Trakt {
    constructor(options: Options)
  }
}
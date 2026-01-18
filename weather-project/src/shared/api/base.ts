import { KMA_API_URL, KMA_SERVICE_KEY } from "@/shared/config/index.ts";

type KmaCommonParams = {
  ServiceKey: string;
  pageNo: number;
  numOfRows: number;
  dataType: "JSON" | "XML";
};


export class ApiClient {
  private baseUrl: string;
  private defaultParams: Partial<KmaCommonParams>;

  constructor(url: string, defaultParams?: Partial<KmaCommonParams>) {
    this.baseUrl = url;
    this.defaultParams = defaultParams ?? {};
  }

  async handleResponse<TResult>(response: Response): Promise<TResult> {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    try {
      return await response.json();
    } catch (error) {
      throw new Error('Error parsing JSON response');
    }
  }

  public async get<TResult = unknown>(endpoint: string, queryParams?: Record<string, string | number>): Promise<TResult> {
    const url = new URL(endpoint, this.baseUrl);

    if (queryParams) {
      Object.entries(queryParams).forEach(([key, value]) => {
        url.searchParams.append(key, value.toString());
      });
    }

    const merged: Record<string, string | number> = {
      ...(this.defaultParams as Record<string, string | number>),
      ...(queryParams ?? {}),
    };

    Object.entries(merged).forEach(([key, value]) => {
      url.searchParams.set(key, String(value));
    });

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return this.handleResponse<TResult>(response);
  }

}

export const apiClient = new ApiClient(KMA_API_URL,  {
  ServiceKey: KMA_SERVICE_KEY ?? "",
  pageNo: 1,
  numOfRows: 1000,
  dataType: "JSON",
});
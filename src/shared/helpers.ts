interface ApiCall extends RequestInit {
  url: RequestInfo;
}

export type Primitive = string | boolean | number;

export async function apiCall<T = any>({
  url,
  method = "GET",
  ...rest
}: ApiCall): Promise<T> {
  console.log(method);
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...rest.headers,
  };
  // NOTE: The order of the parameters is important
  const response = await fetch(url, {
    method,
    mode: "no-cors",
    ...rest,
    headers,
  });
  const json = await response.json();

  if (!response.ok) {
    const err = json?.message ?? response.statusText;
    throw new Error(err);
  }

  return json;
}

export const searchParams = (params: Record<string, Primitive>) => {
  const strParams = Object.entries(params)
    .map(([k, v]) => `${k}=${v}`)
    .join("&");

  return strParams ? `?${strParams}` : "";
};

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

type StatusInfo = { title: string; description: string }
const statuses: Record<number, StatusInfo> = {
  100: { "title": "Continue", "description": "The server is ready to continue the request." },
  101: { "title": "Switching Protocols", "description": "The server is switching to a different protocol." },
  102: { "title": "Processing", "description": "The server is processing the request." },
  103: { "title": "Early Hints", "description": "The server is sending preliminary response headers." },
  200: { "title": "OK", "description": "The request was successful." },
  201: { "title": "Created", "description": "The resource was successfully created." },
  202: { "title": "Accepted", "description": "The request has been accepted for processing." },
  203: { "title": "Non-Authoritative Information", "description": "The response is from a third-party source." },
  204: { "title": "No Content", "description": "The request succeeded but returned no content." },
  205: { "title": "Reset Content", "description": "Please reset the view or form." },
  206: { "title": "Partial Content", "description": "Only part of the content was returned." },
  207: { "title": "Multi-Status", "description": "Multiple status codes are returned." },
  208: { "title": "Already Reported", "description": "The resource has already been reported." },
  226: { "title": "IM Used", "description": "The server fulfilled the request using instance-manipulations." },
  300: { "title": "Multiple Choices", "description": "There are multiple options for this resource." },
  301: { "title": "Moved Permanently", "description": "The resource has moved to a new location." },
  302: { "title": "Found", "description": "The resource is temporarily located elsewhere." },
  303: { "title": "See Other", "description": "The response can be found at another URI." },
  304: { "title": "Not Modified", "description": "The resource has not been modified." },
  305: { "title": "Use Proxy", "description": "The resource must be accessed through a proxy." },
  306: { "title": "Switch Proxy", "description": "This code is no longer used." },
  307: { "title": "Temporary Redirect", "description": "The resource is temporarily located at a different URI." },
  308: { "title": "Permanent Redirect", "description": "The resource is permanently located at a new URI." },
  400: { "title": "Bad Request", "description": "The request could not be understood by the server." },
  401: { "title": "Unauthorized", "description": "You must be authenticated to access this resource." },
  402: { "title": "Payment Required", "description": "Payment is required to access this resource." },
  403: { "title": "Forbidden", "description": "You do not have permission to access this resource." },
  404: { "title": "Page Not Found", "description": "The page you are looking for does not exist." },
  405: { "title": "Method Not Allowed", "description": "The request method is not supported for this resource." },
  406: { "title": "Not Acceptable", "description": "The requested format is not available." },
  407: { "title": "Proxy Authentication Required", "description": "Authentication with the proxy is required." },
  408: { "title": "Request Timeout", "description": "The server timed out waiting for the request." },
  409: { "title": "Conflict", "description": "There was a conflict with the current state of the resource." },
  410: { "title": "Gone", "description": "The resource is no longer available." },
  411: { "title": "Length Required", "description": "The Content-Length header is required." },
  412: { "title": "Precondition Failed", "description": "A precondition in the request failed." },
  413: { "title": "Payload Too Large", "description": "The request payload is too large." },
  414: { "title": "URI Too Long", "description": "The request URI is too long." },
  415: { "title": "Unsupported Media Type", "description": "The media type is not supported." },
  416: { "title": "Range Not Satisfiable", "description": "The requested range cannot be served." },
  417: { "title": "Expectation Failed", "description": "The server cannot meet the requirements of the Expect header." },
  418: { "title": "I'm a Teapot", "description": "This server refuses to brew coffee with a teapot." },
  421: { "title": "Misdirected Request", "description": "The request was directed to the wrong server." },
  422: { "title": "Unprocessable Entity", "description": "The request was well-formed but could not be processed." },
  423: { "title": "Locked", "description": "The resource is locked." },
  424: { "title": "Failed Dependency", "description": "The request failed due to a failed dependency." },
  425: { "title": "Too Early", "description": "The server is unwilling to process the request yet." },
  426: { "title": "Upgrade Required", "description": "The client should switch to a different protocol." },
  428: { "title": "Precondition Required", "description": "A required precondition header is missing." },
  429: { "title": "Too Many Requests", "description": "You have sent too many requests in a short time." },
  431: { "title": "Request Header Fields Too Large", "description": "The request headers are too large." },
  451: { "title": "Unavailable For Legal Reasons", "description": "The resource is unavailable due to legal restrictions." },
  500: { "title": "Internal Server Error", "description": "Something went wrong on the server." },
  501: { "title": "Not Implemented", "description": "This feature is not supported on the server." },
  502: { "title": "Bad Gateway", "description": "The server received an invalid response from the upstream server." },
  503: { "title": "Service Unavailable", "description": "The server is temporarily unavailable." },
  504: { "title": "Gateway Timeout", "description": "The server did not receive a timely response." },
  505: { "title": "HTTP Version Not Supported", "description": "The server does not support the HTTP version used." },
  506: { "title": "Variant Also Negotiates", "description": "A configuration error caused a circular reference." },
  507: { "title": "Insufficient Storage", "description": "The server does not have enough storage." },
  508: { "title": "Loop Detected", "description": "The server detected an infinite loop in processing." },
  510: { "title": "Not Extended", "description": "Further extensions to the request are required." },
  511: { "title": "Network Authentication Required", "description": "Network authentication is required to access this resource." }
}

</script>

<template>
  <UApp>
    <UError :error="{
      statusCode: error.statusCode,
      statusMessage: statuses[error.statusCode]?.title,
      message: statuses[error.statusCode]?.description
    }" :clear="{
      color: 'neutral',
      size: 'xl',
      icon: 'i-lucide-arrow-left',
      class: 'rounded-full'
    }"
    :ui="{
      statusMessage: 'font-mono',
    }">
      <template #statusCode>
        <label>{{ error.statusCode }}</label>
      </template>
    </UError>

    <UFooter />
  </UApp>
</template>
import { z } from "zod";
import { clientSchema, clientSchemaRequest } from "../../schemas/clientSchemas/client.schemas";


type TClientRequest = z.infer<typeof clientSchemaRequest>;

type TClientResponse = z.infer<typeof clientSchema>;

type updateRequest = Partial<TClientRequest>;


export {TClientResponse,TClientRequest,updateRequest}
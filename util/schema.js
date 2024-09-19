import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const MockInterview=pgTable('mockInter',{
    id:serial('id').primaryKey(),
    jsonMockResp:text('jsonMockResp').notNull(),
    jobDesc:varchar('jsonMockResp').notNull(),
    jobExperience:varchar('jsonMockResp').notNull(),
    createBy:varchar('createBy').notNull(),
    createAt:varchar('createAt'),
    mockId:varchar('mockId').notNull()

})
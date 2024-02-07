<template>
    <el-dialog title="会议发布" :visible.sync="dialogVisible" width="60%" :before-close="handleClose">
        <!-- 表单 -->
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="会议名称" prop="mettingName">
                <el-input v-model="ruleForm.mettingName"></el-input>
            </el-form-item>
            <el-form-item label="会议地点" prop="mettingAddress">
                <el-select v-model="ruleForm.mettingAddress" placeholder="请选择会议地点">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="开始时间" required>
                <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                            style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-form-item prop="date2">
                        <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="结束时间" required>
                <el-col :span="11">
                    <el-form-item prop="date3">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date3"
                            style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-form-item prop="date4">
                        <el-time-picker placeholder="选择时间" v-model="ruleForm.date4" style="width: 100%;"></el-time-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="参会部门" prop="participatDept">
                <el-button type="primary" @click="innerVisible = true">选择参会部门</el-button>
            </el-form-item>
            <!-- <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            </el-form-item> -->
        </el-form>

        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
        <!-- 内部弹窗 参会部门选择 -->
        <el-dialog width="30%" title="参会部门选择" :visible.sync="innerVisible" append-to-body>
            <!-- 部门列表 -->
            <TreeView />
            <span slot="footer" class="dialog-footer">
                <el-button @click="innerVisible = false">取 消</el-button>
                <el-button type="primary" @click="innerVisible = false">确 定</el-button>
            </span>
        </el-dialog>

    </el-dialog>
</template>

<script>
import TreeView from '../../components/TreeView.vue'
export default {
    components: {
        TreeView
    },
    data() {
        return {
            innerVisible: false,//内部弹窗控制属性
            dialogVisible: false,//外部弹窗控制属性
            ruleForm: {
                participatDept: '',
                mettingName: '',
                mettingAddress: '',
                date1: '',
                date2: '',
                date3: '',
                date4: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            rules: {
                mettingName: [
                    { required: true, message: '请输入会议名称', trigger: 'blur' }
                ],
                mettingAddress: [
                    { required: true, message: '请选择会议地点', trigger: 'change' }
                ],
                date1: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                date2: [
                    { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                ],
                date3: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                date4: [
                    { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                ]
            }
        };
    },
    methods: {
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>

<style scoped>
.line {
    text-align: center;
}
</style>